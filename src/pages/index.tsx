import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { useCtx } from "../store";
// import { getSession, signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

export default function Home() {
   const { userState } = useCtx();

   // const [session, loading] = useSession();
   // console.log(session);

   return (
      <Layout>
         <div className="">
            <Head>
               <title>Technolux BD</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
               {/* {!session && (
                  <>
                     <div>Not signed in</div>
                     <button onClick={signIn}>Sign in</button>
                  </>
               )}
               {session && (
                  <>
                     Signed in as {session.user.email}
                     <button onClick={signOut}>Sign out</button>
                  </>
               )} */}
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
               provident modi eos voluptatem! Unde placeat consequatur dicta, et
               rerum ad ducimus laboriosam, at suscipit voluptate magnam
               repellendus! Illo vitae suscipit praesentium adipisci facilis,
               illum magni eveniet. Tempore iste, et similique, vero saepe fugit
               omnis quo assumenda, perspiciatis nesciunt at inventore
               doloremque unde animi eum sunt ab sint veritatis cum porro alias.
               Nesciunt inventore soluta voluptatibus corporis nostrum labore
               amet facere velit et dignissimos quo obcaecati perferendis,
               delectus atque vero doloremque incidunt vel. Ratione, voluptatum
               voluptatem fugit veniam debitis magni omnis. Quis quam labore
               aliquam repellendus? Reiciendis quibusdam pariatur in quas,
               ratione adipisci! Ad aspernatur nisi accusamus aut tempora nobis
               modi earum ducimus optio laudantium sint itaque corporis,
               cupiditate enim at maxime explicabo totam quo atque? Sit quos
               ipsa eaque, perspiciatis aliquid rem corporis assumenda nobis
               recusandae aspernatur, eligendi cupiditate labore quisquam
               voluptatem veritatis! Dicta a illum facilis beatae soluta dolor
               quod corrupti recusandae dolores aspernatur officia, voluptatum
               quisquam veniam, quas doloremque illo! Magnam debitis rerum amet
               qui ex molestiae, sapiente laudantium voluptate et aspernatur
               enim, illo tenetur labore tempora excepturi dignissimos. Alias in
               necessitatibus quidem aspernatur tempore exercitationem mollitia
               sint, molestias, soluta ab, dicta sapiente atque. Minima aut unde
               provident blanditiis minus itaque eveniet officiis accusamus
               sequi? Omnis minima recusandae, voluptate rem sint reprehenderit
               atque! Ut, voluptates beatae. Sequi recusandae dolor voluptatum
               atque sapiente accusantium corporis, aliquam esse dolorem
               repellat ab, odio reiciendis fugit quasi omnis quos ex magni
               soluta eveniet consectetur. Enim earum odio corrupti vero porro.
               Corporis incidunt magnam commodi magni soluta veritatis maxime id
               voluptatum deserunt iusto inventore labore esse fuga, sapiente
               consectetur itaque repellat voluptate? Nam fugit sint aperiam
               eaque! Maxime culpa voluptatibus debitis consequatur et cumque
               delectus ut odio aliquid nihil quaerat eum repudiandae velit
               labore quo voluptates, qui deserunt cupiditate. Sequi minus
               incidunt inventore eum ratione reprehenderit sunt facere
               aspernatur et, repellat neque accusamus facilis nulla, unde
               beatae, doloribus maxime! A sit, quidem et est exercitationem
               maxime tempore, magnam, vitae dolorum eaque ratione in
               dignissimos iste voluptates. Ad dignissimos quas sit omnis, id
               recusandae beatae? Quos consequatur facilis dolor! Ipsum, dolorem
               aliquam consequuntur, quae exercitationem recusandae commodi
               fugiat dolorum dignissimos aperiam magni dolore, et architecto at
               tempore iusto doloremque illum delectus saepe libero eaque nobis
               eligendi. Voluptates nostrum perferendis praesentium corporis
               accusantium et, quod saepe non totam enim sed ratione possimus id
               ex doloremque consectetur ad, odio nobis repellat voluptatem
               perspiciatis cum quidem blanditiis. Placeat architecto et odit,
               non labore a at? Est ut officia rerum eligendi expedita
               asperiores sapiente, perferendis doloribus cumque eos enim hic
               delectus inventore ipsa impedit odio distinctio saepe sunt earum
               autem. Numquam reiciendis aliquam ratione officiis alias atque
               impedit eaque dolores nemo esse repudiandae perferendis
               laudantium, aspernatur doloribus totam optio soluta ipsa eius,
               quo, ullam rerum! Repudiandae nulla tenetur architecto doloribus
               aliquid, suscipit, commodi repellat officiis itaque beatae rerum
               deserunt laboriosam corrupti aut fuga, ea cumque harum veniam
               quos dignissimos dolorum ipsum! Corporis dolorum ea cumque qui
               fuga animi, molestias, dignissimos ducimus odit nesciunt saepe.
               Magni, illo cupiditate! Harum totam dolor aperiam veritatis
               tempora ipsum quis vero esse voluptatem quo ducimus, nesciunt
               voluptate labore quia rem ipsa ullam! Unde dolorem at accusamus
               totam quae accusantium consequuntur officiis quibusdam
               necessitatibus? Saepe, magni recusandae rerum blanditiis
               consequuntur, voluptatum rem ipsam hic vero sint dicta. Et quia
               accusantium repellat nam magni rerum sed voluptas placeat tempore
               explicabo ducimus eius laboriosam optio non mollitia atque
               quisquam at corporis, unde possimus ipsum. Nobis deleniti, culpa
               sed laudantium labore placeat. Tenetur, debitis vel. In quasi
               atque aliquid dolor officia, iure amet? Eaque, quam reprehenderit
               libero vero nemo autem dolore obcaecati delectus cupiditate.
               Fugiat rem libero voluptatum aliquid nobis magnam eius tempore
               adipisci sunt quidem quaerat pariatur labore non explicabo, ullam
               rerum nisi, provident officiis? Beatae totam temporibus ducimus
               nesciunt, sit nobis exercitationem quis voluptatem distinctio!
               Necessitatibus, neque fuga nam sunt recusandae aperiam sapiente
               repudiandae nihil nostrum reiciendis quaerat totam praesentium
               voluptate eum? Quasi repudiandae cum autem incidunt ullam?
               Doloremque a beatae rerum, laboriosam nulla soluta repudiandae
               temporibus necessitatibus eius odio, qui quasi ad quaerat sint
               excepturi provident delectus impedit aspernatur! Libero
               laboriosam facilis voluptate corporis corrupti quos adipisci
               deleniti eos ab sunt aliquam voluptatibus, explicabo earum itaque
               ullam debitis tempora at esse culpa. Assumenda eveniet beatae
               voluptatum labore modi doloribus voluptas libero quae blanditiis
               optio temporibus, qui, repudiandae et reprehenderit earum?
               Consequatur totam quibusdam aspernatur sapiente delectus impedit
               sunt repudiandae ratione nam hic inventore fugit, cumque
               distinctio aliquam natus exercitationem optio quasi esse
               architecto eum recusandae. Molestias odio dolorum, corporis
               quisquam error tempora delectus laborum? Ad rem in cupiditate
               voluptate enim quasi, quis fuga omnis possimus, harum dolorum
               iure minima cumque quibusdam ex, sequi a commodi. Laborum amet,
               perspiciatis magni aspernatur magnam esse, perferendis eaque
               delectus libero illo accusantium consectetur omnis repellendus
               soluta! Veritatis, velit culpa! Aliquid commodi quae vel, id
               obcaecati ratione aspernatur veniam consequatur earum sit
               voluptatem tenetur quaerat? Officiis esse molestiae saepe aperiam
               voluptatem eaque dolor libero culpa a quos iure numquam, officia
               quae possimus repudiandae, modi vitae! Asperiores quasi debitis
               aperiam, tempore eius voluptates ad qui officiis possimus
               molestiae cumque, facere alias distinctio quaerat necessitatibus
               iusto nobis sapiente ex praesentium doloremque. Assumenda, iste
               suscipit molestias recusandae, nam quas perferendis illo hic
               aspernatur dolorem vero. Impedit, nulla sunt. Eum velit
               doloremque eos iusto perferendis expedita pariatur voluptatem,
               possimus rem ea, dolorem omnis sit dicta corrupti, ipsum nemo.
               Labore reiciendis minus corporis, rerum aut voluptate accusamus,
               nam vero doloribus quasi sunt maxime quo atque id dolore eum odit
               excepturi consectetur incidunt? Deleniti eius, distinctio dolorum
               esse ducimus cupiditate obcaecati! Architecto tenetur quos unde
               nemo fugit quas vitae, voluptatum exercitationem. Velit tempore
               aliquid earum modi vel voluptatibus nam, quis illo nostrum?
               Numquam eveniet, eaque, dolore nisi eius voluptatum labore
               sapiente cum, maxime incidunt nemo. Distinctio, sequi minus
               praesentium velit doloremque, perspiciatis recusandae mollitia
               autem, suscipit dolorem temporibus iure est? Aut corporis beatae
               laboriosam a, nulla in inventore sint maxime quidem praesentium
               voluptatum perferendis suscipit eveniet veniam ut, exercitationem
               reiciendis id perspiciatis quibusdam quod cumque impedit! Qui
               accusamus odio, quo aliquam magni veniam ea exercitationem?
            </main>
         </div>
      </Layout>
   );
}
