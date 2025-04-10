import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Erro">
        <section className="erroe-area pt-70 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="eperror__wrapper text-center">
                  <div className="tperror__thumb mb-35">
                    <img src="/assets/img/icon/error.png" alt />
                  </div>
                  <div className="tperror__content">
                    <h4 className="tperror__title mb-25">
                      404. Página não encontrada
                    </h4>
                    <p>
                      Desculpe, não conseguimos encontrar a página que você está
                      procurando. Sugerimos que <br /> você volte para a página
                      inicial.
                    </p>
                    <Link
                      href="/"
                      className="tpsecondary-btn tp-color-btn tp-error-btn"
                    >
                      <i className="fal fa-long-arrow-left" /> Voltar para a
                      página inicial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
