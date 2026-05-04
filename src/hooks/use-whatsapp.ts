"use client";

import { useCallback, useEffect, useState } from "react";

const API_BASE = "https://troca-numeros-api-production.up.railway.app";
const DEFAULT_MESSAGE = "Olá! Gostaria de consultar minha situação.";

function onlyDigits(value: string) {
  return String(value || "").replace(/\D/g, "");
}

export function buildWhatsappUrl(phoneDigits: string, message: string) {
  const phone = onlyDigits(phoneDigits);
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${phone}?text=${text}`;
}

export function useWhatsapp() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPhone = useCallback(async () => {
    try {
      setLoading(true);

      const hostname =
        typeof window !== "undefined"
          ? window.location.hostname.replace(/^www\./, "")
          : "";

      const domain =
        hostname === "localhost" || hostname === "127.0.0.1"
          ? process.env.NEXT_PUBLIC_SITE_DOMAIN || hostname
          : hostname;

      if (!domain) {
        throw new Error("Domínio inválido.");
      }

      const response = await fetch(
        `${API_BASE}/zap?domain=${encodeURIComponent(domain)}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const resolvedPhone = onlyDigits(data?.phone || data?.numero || "");

      if (!resolvedPhone) {
        throw new Error("Número não retornado pela API.");
      }

      setPhone(resolvedPhone);
      setError(null);
    } catch {
      setPhone("");
      setError("WhatsApp indisponível no momento.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhone();
  }, [fetchPhone]);

  const openWhatsapp = useCallback(
    (message: string) => {
      if (loading) {
        alert("Carregando atendimento... tente novamente.");
        return;
      }

      if (!phone) {
        alert(error || "WhatsApp indisponível no momento.");
        return;
      }

      window.open(buildWhatsappUrl(phone, message), "_blank", "noopener,noreferrer");
    },
    [error, loading, phone]
  );

  return {
    phone,
    loading,
    error,
    openWhatsapp,
  };
}