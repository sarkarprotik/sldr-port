import React from "react";
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
    <Section wrapper={false} backgroundColor="#292c35">
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <Lettering
            title="Hi! I'm Protik Sarkar"
            text={[
              "An Ex-Aerospace Engineer who fell in love with Coding",
              "Check out some Amazing Projects I've Worked on --------->"
            ]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="small"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
             forward
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {

  let url = 'https://cmsbackend.herokuapp.com/articles/1'

  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let image
  async function callData() {
    const res = await fetch(url)
    const posts = await res.json()
    console.log(posts)
    image = posts.image.formats.small.url
  }
  callData()
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="https://res.cloudinary.com/dbcjs8bca/image/upload/v1591213509/large_IMG_0166_c0ecea609d.png" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              back
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section backgroundColor="#617be3">
          <Lettering
            title="PAGE-SECTION"
            text={["This is a continued page section."]}
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: <Third />
  }
];
