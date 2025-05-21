"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function MobileMenu() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="mobile-menu">
        <ul>
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/shop">Loja</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
