import React from "react"
import Layout from "../components/Layout"
import _6_NCAFPLogo from "../../static/assets/recent-activities/_6_NCAFPLogo.jpg"
import _5_TeachingCertificate from "../../static/assets/recent-activities/_5_TeachingCertificate.png"
import _4_PublicDiplomacyChapter from "../../static/assets/recent-activities/_4_PublicDiplomacyChapter.jpg"
import _3_NUAC from "../../static/assets/recent-activities/_3_NUAC.jpg"
import _2_APLNKT from "../../static/assets/recent-activities/_2_APLNKT.jpg"
import _1_AIIA from "../../static/assets/recent-activities/_1_AIIA.jpg"

import * as AboutStyles from "../styles/about.module.css"
import * as RecentStyles from "../styles/recent.module.css"

export default function RecentActivities() {
  return (
    <Layout>
      <h2 className={AboutStyles.title}>Recent Activities</h2>

      <div className={RecentStyles.content__card}>
        <h5>
          Workshop Presentation (National Committee on American Foreign Policy)
        </h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_6_NCAFPLogo}
            alt="_6_NCAFPLogo"
          />
          <div className={RecentStyles.activity__text}>
            <p>May 25, 2021</p>
            <p>
              In May 2021, I was selected as one of ten participants in the
              National Committee on American Foreign Policy's Next Generation
              Korea Specialists Program, which aims to help emerging leaders
              translate their research ideas into policy recommendations, and to
              develop public communications skills in presenting their
              recommendations. The first workshop was held on May 25, during
              which I presented my research prospectus to the group for peer
              feedback.
            </p>
          </div>
        </div>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>Teaching Certificate (UNSW Sydney) </h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_5_TeachingCertificate}
            alt="_5_TeachingCertificate"
          />
          <div className={RecentStyles.activity__text}>
            <p>May 19, 2021</p>
            <p>
              From February - May 2021, I participated in UNSW's Foundations of
              University Learning and Teaching (FULT) program, an assessed
              professional development course in which I explored a range of
              perspectives, ideas, theories, and practical approaches to
              learning and teaching in the higher education context.
            </p>
          </div>
        </div>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>Award (ROK MOFA/Global Public Diplomacy Center)</h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_4_PublicDiplomacyChapter}
            alt="_4_PublicDiplomacyChapter"
          />
          <div className={RecentStyles.activity__text}>
            <p>December 28, 2020</p>
            <p>
              I was awarded First Prize in the 2020 Korean Public Diplomacy
              Paper Contest, organised by the ROK Ministry of Foreign Affairs
              and the Global Public Diplomacy Center, for a research paper I
              wrote on South Korea’s public naval diplomacy strategy. In
              addition to an award and US$500 prize, my research paper was
              subsequently published as a book chapter in a collection of essays
              by the Ministry of Foreign Affairs.
            </p>
          </div>
        </div>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>Award (NUAC Asia-Pacific Assembly)</h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_3_NUAC}
            alt="_3_NUAC"
          />
          <div className={RecentStyles.activity__text}>
            <p>December 18, 2020</p>
            <p>
              I was awarded The Presidential Citation by South Korean President
              Moon Jae-in in his capacity as Chairman of the National
              Unification Advisory Council Asia-Pacific Assembly, for an essay I
              wrote on barriers to inter-Korean rapprochement. My award was
              presented by Sangwoo Hong, the Consul-General of the Republic of
              Korea in Sydney. The award, and US$1500 prize, was presented at a
              ceremony in Sydney, where I also delivered a presentation on my
              topic. My essay was subsequently published both on the National
              Unification Advisory Council Asia-Pacific Assembly website.
            </p>
          </div>
        </div>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>Award (APLN/Korea Times)</h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_2_APLNKT}
            alt="_2_APLNKT"
          />
          <div className={RecentStyles.activity__text}>
            <p>November 27, 2020</p>
            <p>
              I was awarded The Korea Times Award by the Asia Pacific Leadership
              Network (APLN) and the Korea Times for a short article I wrote on
              non-proliferation and disarmament issues in the Asia Pacific. My
              award was presented by Korea Times President-Publisher Oh
              Young-jin, together with APLN Vice Chairman and Executive Director
              Moon Chung-in and South Korea’s Deputy Minister for Multilateral
              and Global Affairs Ham Sang-wook. The award, and US$1000 prize,
              was presented at a ceremony in Seoul, although I attended via
              video link-up due to COVID-19. The article was published both on
              the APLN site, and in the Korea Times.
            </p>
          </div>
        </div>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>Workshop (AIIA/Korea Foundation)</h5>

        <div className={RecentStyles.activity__content}>
          <img
            className={RecentStyles.activity__img}
            src={_1_AIIA}
            alt="_1_AIIA"
          />
          <div className={RecentStyles.activity__text}>
            <p>November 25, 2020</p>
            <p>
              I was invited to take part in the 2020 Korea-Oceania Next
              Generation Policy Expert Forum hosted online by the Australian
              Institute of International Affairs and the Korea Foundation. This
              three-day event featured some great people & discussion on
              cooperation, governance and regional security during and after
              COVID-19.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Format to add
// <div className={RecentStyles.content__card}>
//   <h5>title</h5>

//   <div className={RecentStyles.activity__content}>
//     <img
//       className={RecentStyles.activity__img}
//       src={}
//       alt=""
//     />
//     <div className={RecentStyles.activity__text}>
//       <p>date</p>
//       <p>body text</p>
//     </div>
//   </div>
// </div>
