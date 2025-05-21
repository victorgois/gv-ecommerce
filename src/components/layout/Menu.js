import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <>
      <div className="tpmenu__nav">
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
