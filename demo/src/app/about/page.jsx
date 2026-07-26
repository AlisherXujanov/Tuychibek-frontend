import Heading from "../components/Heading"
import "./style.scss"


const aboutOurCompany = [
  { title: "Our Company", description: "We are a company that makes products for the home." },
  { title: "Our Mission", description: "Our mission is to provide the best products for the home." },
  { title: "Our Vision", description: "Our vision is to be the best company in the world." },
  { title: "Our Values", description: "Our values are to be honest, fair, and to always do the right thing." },
  { title: "Our History", description: "Our history is a long and storied one." },
  { title: "Our Team", description: "Our team is a group of people who are dedicated to our mission." },
  { title: "Our Customers", description: "Our customers are the people who buy our products." },
]


export default function About() {
  return (
    <div className="about-page">
      <Heading title="About" color="red" />

      <div className="cards">
        {
          aboutOurCompany && aboutOurCompany.map((item, idx) => {
            return (
              <div key={idx + item.title} className="card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}