import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import facebook from '../../assets/images/fb.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/yt.png';
import instagram from '../../assets/images/ig.jpg';
export default function FooterDemo() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <img
              src={facebook}
              alt=""
              className="logo"
              style={{ maxWidth: '25px' }}
            />
          </a>
          <a href="" className="me-4 text-reset">
            <img
              src={twitter}
              alt=""
              className="logo"
              style={{ maxWidth: '25px' }}
            />{' '}
          </a>
          <a href="" className="me-4 text-reset">
            <img
              src={youtube}
              alt=""
              className="logo"
              style={{ maxWidth: '25px' }}
            />{' '}
          </a>
          <a href="" className="me-4 text-reset">
            <img
              src={instagram}
              alt=""
              className="logo"
              style={{ maxWidth: '25px' }}
            />{' '}
          </a>
        </div>
      </section> */}

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h2 className="text-title">
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                Ableton
              </h2>
              <div className="signup_text">
                <h6 className="sign_news">Sign up for our newsLetter</h6>
                <p>
                  Enter your email address to stay up to date with the latest
                  offers, tutorials, downloads, surveys and more.
                </p>
              </div>
            </MDBCol>
            <div className="input_field">
              <input
                type="text"
                placeholder="Email address"
                className="input "
              />
              <button className="bg-blue w-[84px] rounded-lg">send</button>
            </div>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="me-4 text-reset">
                  <img
                    src={facebook}
                    alt=""
                    className="logo"
                    style={{ maxWidth: '25px' }}
                  />
                </a>
                <a href="" className="me-4 text-reset">
                  <img
                    src={twitter}
                    alt=""
                    className="logo"
                    style={{ maxWidth: '25px' }}
                  />{' '}
                </a>
                <a href="" className="me-4 text-reset">
                  <img
                    src={youtube}
                    alt=""
                    className="logo"
                    style={{ maxWidth: '25px' }}
                  />{' '}
                </a>
                <a href="" className="me-4 text-reset">
                  <img
                    src={instagram}
                    alt=""
                    className="logo"
                    style={{ maxWidth: '25px' }}
                  />{' '}
                </a>
              </div>
            </section>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
