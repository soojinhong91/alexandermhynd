import React from "react"
import Layout from "../components/Layout"
import PublicDiplomacyChapter from "../../static/assets/recent-activities/PublicDiplomacyChapter.jpg"
import NUAC from "../../static/assets/recent-activities/NUAC.jpg"
import APLNKT from "../../static/assets/recent-activities/APLNKT.jpg"
import AIIA from "../../static/assets/recent-activities/AIIA.jpg"

export default function RecentActivities() {
  return (
    <Layout>
      <h2>Recent Activities</h2>

      <div>
        <h4>Award (ROK MOFA/Global Public Diplomacy Center)</h4>
        <img src={PublicDiplomacyChapter} alt="PublicDiplomacyChapter" />
        <p>December 28, 2020</p>
        <p>
          I was awarded First Prize in the 2020 Korean Public Diplomacy Paper
          Contest, organised by the ROK Ministry of Foreign Affairs and the
          Global Public Diplomacy Center, for a research paper I wrote on South
          Korea’s public naval diplomacy strategy. In addition to an award and
          US$500 prize, my research paper was subsequently published as a book
          chapter in a collection of essays by the Ministry of Foreign Affairs.
        </p>
      </div>

      <div>
        <h4>Award (NUAC Asia-Pacific Assembly)</h4>
        <img src={NUAC} alt="NUAC" />
        <p>December 18, 2020</p>
        <p>
          I was awarded The Presidential Citation by South Korean President Moon
          Jae-in in his capacity as Chairman of the National Unification
          Advisory Council Asia-Pacific Assembly, for an essay I wrote on
          barriers to inter-Korean rapprochement. My award was presented by
          Sangwoo Hong, the Consul-General of the Republic of Korea in Sydney.
          The award, and US$1500 prize, was presented at a ceremony in Sydney,
          where I also delivered a presentation on my topic. My essay was
          subsequently published both on the National Unification Advisory
          Council Asia-Pacific Assembly website.
        </p>
      </div>

      <div>
        <h4>Award (APLN/Korea Times)</h4>
        <img src={APLNKT} alt="APLNKT" />
        <p>November 27, 2020</p>
        <p>
          I was awarded The Korea Times Award by the Asia Pacific Leadership
          Network (APLN) and the Korea Times for a short article I wrote on
          non-proliferation and disarmament issues in the Asia Pacific. My award
          was presented by Korea Times President-Publisher Oh Young-jin,
          together with APLN Vice Chairman and Executive Director Moon Chung-in
          and South Korea’s Deputy Minister for Multilateral and Global Affairs
          Ham Sang-wook. The award, and US$1000 prize, was presented at a
          ceremony in Seoul, although I attended via video link-up due to
          COVID-19. The article was published both on the APLN site, and in the
          Korea Times.
        </p>
      </div>

      <div>
        <h4>Workshop (AIIA/Korea Foundation)</h4>
        <img src={AIIA} alt="AIIA" />
        <p>November 25, 2020</p>
        <p>
          I was invited to take part in the 2020 Korea-Oceania Next Generation
          Policy Expert Forum hosted online by the Australian Institute of
          International Affairs and the Korea Foundation. This three-day event
          featured some great people & discussion on cooperation, governance and
          regional security during and after COVID-19.
        </p>
      </div>
    </Layout>
  )
}
