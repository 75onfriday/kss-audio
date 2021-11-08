import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-2 fw-bold">
        Revolutionizing audio and lighting in the caribbean.
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          DJ Services,PA Systems,Equipment Rental,Lighting,Audio
          Equipment,Special Event, Full Production and more..
        </p>
      </div>
    </div>
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <StaticImage
                src="../images/parade_float.jpg"
                className="img-fluid"
              />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <StaticImage src="../images/IMG_3724.jpg" className="img-fluid" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <StaticImage src="../images/IMG_7431.jpg" className="img-fluid" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <StaticImage src="../images/IMG_1079.jpg" className="img-fluid" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <StaticImage src="../images/IMG_0266.jpg" className="img-fluid" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <StaticImage src="../images/IMG_3575.jpg" className="img-fluid" />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Send Us A Message</h5>
                    </div>
                    <form
                      action=""
                      method="post"
                      role="form"
                      className="contactForm"
                    >
                      <div id="errormessage"></div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              data-rule="email"
                              data-msg="Please enter a valid email"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 8 chars of subject"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              rows="5"
                              data-rule="required"
                              data-msg="Please write something for us"
                              placeholder="Message"
                            ></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg px-4 gap-3"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                      Let's get started on planning your next event! Send us a
                      message.
                    </p>
                    <ul className="list-ico">
                      <li>
                        <span className="ion-ios-location"></span> PO BOX 5085
                        Kingshill, VI 00851
                      </li>
                      <li>
                        <span className="ion-ios-telephone"></span> (340)
                        277-5492{" "}
                      </li>
                      <li>
                        <span className="ion-email"></span>{" "}
                        kssaudioent@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img src="images/kss.png" alt="" />
          </a>
          <p class="text-muted">© 2021</p>
        </div>

        <div class="col"></div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </Layout>
)

export default IndexPage
