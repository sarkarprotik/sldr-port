import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <>
      <Section wrapper={false} backgroundColor="#292c35">
        <Background src="https://res.cloudinary.com/dbcjs8bca/image/upload/v1593472086/large_image_85a4339b93.png" />
        <Content
          main={
            <>
              <Lettering
                title="Hi! I'm Protik Sarkar"
                text={[
                  "An Ex-Aerospace Engineer who fell in love with Coding"
                ]}
              />
            </>
          }
          action={
            <div className="button">
            </div>
          }
        />
      </Section>
    </>
  );
});

export const Second = withNavigationContext(({ fullpage }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  let url = 'https://cmsbackend.herokuapp.com/articles/'
  useEffect(() => {
    async function fetchData() {
      let result = await fetch(url);
      let data = await result.json()
      setData(data);
      setLoading(false)
    }
    fetchData();
  }, []);


  const createComponent = (data) => {
    return (
      <div>
        {data.map((data_item, index) => {
          return (
            <div>
              {/* <div style={{ backgroundColor: 'lightgreen', maxWidth: '50vw', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}> */}
              <Section key={`${index}`} backgroundColor="#292c35">
                <Background src={data_item.image.formats.large.url} />
                <Lettering
                  color='pink'
                  title={data_item.title}
                />
                <div style={{ maxWidth: '50vh', textAlign: 'center', paddingBottom: 10}}>
                  <div>
                    <img
                    style={{ justifySelf: 'center', borderRadius: 20}}
                    src={data_item.image.formats.small.url}
                  >
                  </img>
                  </div>
                </div>
                <div style={{  height: '1fr',borderRadius: 10 }}>
                  <p style={{fontFamily: 'monospace', color: 'lightblue', textAlign: 'center', fontFamily: 'bold'}}>{data_item.content}</p>
                </div>
              </Section>        
            </div>
            // </div>
          )
        })}
      </div>
    )
  }

  const Loading = () => {
    return (
      <>
        <div style={{ justifyItems: 'center', textAlign: 'center', backgroundColor: 'black', padding: 20, rotate: 1 }}>
          <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
            width="100"
            height="100"
            frameBorder="0"
            style={{ borderRadius: '5%', backgroundColor: 'black', borderWidth: 5, borderColor: 'pink' }}
            allowFullScreen></iframe>
          <p style={{ color: 'white' }}> <code>{`${'< '}`}Loading CMS ... {`${'/>'}`} </code></p>
        </div>
      </>
    )
  }

  return (
    <Page>
      <Section wrapper={true} backgroundColor="#292c35">
        <Background src="https://caferati.me/images/series/bojack-0.png" />
        <Content
          main={
            <Lettering
              title="Portfolio"
              text={[
                "Scroll Down to see some things I've worked on."
              ]}
            />
          }
          action={<Mouse />}
        />
      </Section>
    

        {loading ? <Loading /> : createComponent(data)}

      <Loading />
    </Page>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={true} backgroundColor="#292c35" >
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <>
            {/* <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          /> */}
            <div className="content__action__github">
              <a
                target="_blank"
                href="https://github.com/sarkarprotik"
              >
                <svg viewBox="-7 -10 35 35" version="1.1" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    fill="#FFFFFF"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                  />
                </svg>
                <span>Github</span>
              </a>
            </div>
            <div className="content__action__github">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/protik-sarkar/"
              >
                <svg viewBox="-7 -10 35 35" version="1.1" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    fill="#FFFFFF"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
                <span>Linked</span>
              </a>
            </div>
          </>
        }
        action={
          <div className="button">
            {/* <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              back
            </AwesomeButton> */}
          </div>
        }
      />
    </Section>

  );
});

export const media = [
  {
    slug: "",
    preload: ["https://res.cloudinary.com/dbcjs8bca/image/upload/v1593472086/large_image_85a4339b93.png"],
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: <Second />
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: <Third />
  }
];
