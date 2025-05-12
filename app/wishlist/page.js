import WishlistItems from "@/components/elements/WishlistItems";
import Layout from "@/components/layout/Layout";
export default function Wishlist() {
  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={1}
        breadcrumbTitle="Lista de Desejos"
      >
        <div
          className="cart-area pt-80 pb-80 wow fadeInUp"
          data-wow-duration=".8s"
          data-wow-delay=".2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Imagens</th>
                          <th className="cart-product-name">Produtos</th>
                          <th className="product-price">Preço Unitário</th>
                          <th className="product-quantity">Quantidade</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-add-to-cart">
                            Adicionar ao Carrinho
                          </th>
                          <th className="product-remove">Remover</th>
                        </tr>
                      </thead>
                      <tbody>
                        <WishlistItems />
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
