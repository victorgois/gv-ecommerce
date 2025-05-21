import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function SignIn() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Entrar">
        <section className="track-area pt-80 pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-12">
                <div className="tptrack__product mb-40">
                  <div className="tptrack__content grey-bg-3">
                    <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                        <img src="/assets/img/icon/lock.png" alt="" />
                      </div>
                      <div className="tptrack__item-content">
                        <h4 className="tptrack__item-title">Entrar</h4>
                        <p>
                          Seus dados pessoais serão usados para melhorar sua
                          experiência em todo o site e gerenciar o acesso à sua
                          conta.
                        </p>
                      </div>
                    </div>
                    <div className="tptrack__id mb-10">
                      <form action="#">
                        <span>
                          <i className="fal fa-user" />
                        </span>
                        <input
                          type="email"
                          placeholder="Nome de usuário / email"
                        />
                      </form>
                    </div>
                    <div className="tptrack__email mb-10">
                      <form action="#">
                        <span>
                          <i className="fal fa-key" />
                        </span>
                        <input type="text" placeholder="Senha" />
                      </form>
                    </div>
                    <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Lembrar-me
                        </label>
                      </div>
                      <div className="tpsign__pass">
                        <Link href="#">Esqueceu a senha?</Link>
                      </div>
                    </div>
                    <div className="tptrack__btn">
                      <button className="tptrack__submition">
                        Entrar
                        <i className="fal fa-long-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="tptrack__product mb-40">
                  <div className="tptrack__content grey-bg-3">
                    <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                        <img src="/assets/img/icon/sign-up.png" alt="" />
                      </div>
                      <div className="tptrack__item-content">
                        <h4 className="tptrack__item-title">Cadastrar</h4>
                        <p>
                          Seus dados pessoais serão usados para melhorar sua
                          experiência em todo o site e gerenciar o acesso à sua
                          conta.
                        </p>
                      </div>
                    </div>
                    <div className="tptrack__id mb-10">
                      <form action="#">
                        <span>
                          <i className="fal fa-envelope" />
                        </span>
                        <input type="email" placeholder="Endereço de email" />
                      </form>
                    </div>
                    <div className="tptrack__email mb-10">
                      <form action="#">
                        <span>
                          <i className="fal fa-key" />
                        </span>
                        <input type="text" placeholder="Senha" />
                      </form>
                    </div>
                    <div className="tpsign__account">
                      <Link href="#">Já tem uma conta?</Link>
                    </div>
                    <div className="tptrack__btn">
                      <button className="tptrack__submition tpsign__reg">
                        Cadastrar
                        <i className="fal fa-long-arrow-right" />
                      </button>
                    </div>
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
