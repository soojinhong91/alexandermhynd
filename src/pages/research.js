import React from "react"
import Layout from "../components/Layout"

import * as AboutStyles from "../styles/about.module.css"
import * as RecentStyles from "../styles/recent.module.css"

export default function Research() {
  return (
    <Layout>
      <h2 className={AboutStyles.title}>Research</h2>

      <div className={RecentStyles.content__card}>
        <h5>JOURNAL ARTICLES</h5>
        <ul>
          <li>
            ‘Learning to Share? A Cold War Solution for Denuclearizing the
            Korean Peninsula’ (with Daniel Connolly), North Korean Review Vol.
            15, no. 2 (Fall 2019) 5-22.
          </li>
        </ul>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>BOOK CHAPTERS</h5>
        <ul>
          <li>
            ‘To the Sea, to the World: Public Diplomacy and the Republic of
            Korea Navy’, in Collection of Essays on Korea’s Public Diplomacy:
            Possibilities and Future Outlook, South Korean MOFA. [December
            2020].
          </li>
        </ul>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>BOOK REVIEWS</h5>
        <ul>
          <li>
            ‘The Modernisation of the Republic of Korea Navy: Seapower, Strategy
            and Politics’ by Ian Bowers, US Naval War College Review Vol. 17:
            No. 4, p. 177-178.
          </li>
          <li>
            ‘On the Brink: Trump, Kim, and the Threat of Nuclear War’ by Van
            Jackson, North Korean Review Vol.15: No. 1 (Spring 2019), p.127-129.
          </li>
        </ul>
      </div>

      <div className={RecentStyles.content__card}>
        <h5>COMMENTARIES</h5>
        <ul>
          <li>
            “Strengthening South Korea’s Non-Proliferation Norm: Should
            Anti-Nuclear Arguments Have Emotional Appeal?,” The Asia-Pacific
            Leadership Network for Nuclear Non-Proliferation and Disarmament
            (APLN) and The Korea Times, (November 27, 2020).
          </li>
          <li>
            “South Korea Poised to Commit to the US’s Strait of Hormuz Maritime
            Coalition,” The National Maritime Foundation, (August 22, 2019).
          </li>
          <li>
            “Japan’s imperial ghosts lurk well beyond Korea,” (with Alexine
            Sanchez) The Lowy Interpreter, (August 19, 2019). (republished as
            “Japan-South Korea Trade Dispute Stems From Bitter Historical
            Grievances,” The News Lens, [August 20, 2019]).
          </li>
          <li>
            “Can South Korea’s rival parties unite behind opposition to Japan?,”
            (with Nate Kerkhoff) The National Interest, (July 24, 2019).
          </li>
          <li>
            "What’s behind Abe’s change of heart on a Japan–North Korea
            summit?," (with Nate Kerkhoff) The Strategist, (May 30, 2019).
          </li>
          <li>
            “Trash talk in the Philippines reveals waste trails in Southeast
            Asia,” (with Alexine Sanchez), The Lowy Interpreter (May 20, 2019).
            (republished as “Trash dumping in Manila is raising a stink,”
            Channel News Asia [May 27, 2019]).
          </li>
          <li>
            “With US out of favour and China doubts, Duterte turns to Tokyo,”
            (with Alexine Sanchez), The Lowy Interpreter (March 15, 2019).
          </li>
          <li>
            "The End of An Island? How Inter-Korean Connections Will Change the
            South," The Diplomat (January 24, 2019).
          </li>
          <li>
            “When Chinese Fishermen Become 'Pirates' in the Yellow Sea.” The
            Diplomat (October 17, 2016).
          </li>
        </ul>
      </div>
    </Layout>
  )
}
