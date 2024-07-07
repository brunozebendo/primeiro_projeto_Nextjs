/**a partir da aula 86, primeiro projeto Next q foi um site só para
 * mostrar as principais configurações
 * Após npm install, comandei npm run dev
 * page.js é um nome reservado do JS q diz q ele deve renderizar uma página
 * é igual um componente mas é baseado no servidor, nunca no cliente
 * se der um console.log, por exemplo, não aparece no browser,
 * mas sim no componente.
 * Para criar uma nova página cria-se uma nova pasta e um novo
 * arquivo, por exemplo, pasta about e dentro o arquivo page.js
 */
/**Para usar um link para essa página é preciso a importação abaixo. */
import Link from "next/link";
<p><Link href="/about">About Us</Link></p>

/**Em Next.js, uma layout é uma interface de usuário (UI)
 *compartilhada entre várias rotas. Ela permite definir
 *uma estrutura e aparência comuns para um grupo de páginas,
 *reduzindo a redundância e promovendo a reutilização de código
 Tem que ter ao menos um, mas pode ter mais. */
//aqui a importação do css
 import './globals.css'
//esse metadata é compartilhado entre as páginas que utilizarem
//esse mesmo layout
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
/**Então page.js e layout.js são páginas reservadas,
 * mas pode-se importar qualquer página como no React
 */
/**Na aula 94 ensina como criar rotas dinâmicas,
 * dentro da pasta blog, criou-se uma outra pasta com a sintaxe [],
 * que pode levar qualquer nome, no caso ficou [slug]
 * Assim, dentro do blog/page está o seguinte componente */
 import Link from "next/link"

export default function BlogPage(){
    return( <main>
        <h1>The Blog</h1>
        <p><Link href='/blog/post-1'>Post 1</Link></p>
        <p><Link href='/blog/post-2'>Post 2</Link></p>
    </main>);
}
/**já dentro do [slug] tem uma outra page */
export default function BlogPostPage() {
    return (<main>
        <h1>Blog post!</h1>
    </main>);
}
/*Assim, quando vai no endereço http://localhost:3000/blog e 
clica no link, a rota muda para http://localhost:3000/blog/post-1
e mostra o conteúdo do BlogPostPage o que pode ser
muito prático para mostrar um produto ou um conteúdo
do banco de dados. */