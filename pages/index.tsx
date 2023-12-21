import Head from "next/head";
import styled from "styled-components";

import { leagueGothic } from "./_app";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  margin: 32px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  margin: 0 10% 0 5%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  position: relative;
`;

const SplitTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin-top: 90px;
`;

const Text = styled.span.attrs({
  className: leagueGothic.className,
})`
  font-size: 400px;
  color: #cb3818;

  transform: scale(1, 1.2);
`;

const Image = styled.img.attrs({
  src: "tom.jpg",
  alt: "a picture of me (looking great)",
})`
  height: 550px;
  border-radius: 16px;

  margin-right: 500px;

  position: absolute;
  z-index: -1;

  transform: rotate(-6deg);
`;

const Line = styled.span`
  letter-spacing: -35px;
`;

const LineSpacer = styled.div`
  width: 400px;
`;

const AltText = styled.span.attrs({
  className: leagueGothic.className,
})`
  display: flex;
  font-size: 400px;
  color: #1f0a03;

  background-color: #fffafa;

  z-index: 2;

  transform: scale(1, 1.2);
`;

const Content = styled.div`
  background-color: #fffafa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;
  width: 100%;

  height: 150px;

  margin-top: -140px;

  padding: 16px 0 0;
`;

const ContentText = styled.div`
  font-size: 22px;
  text-align: center;
  line-height: 25px;
  font-weight: 700;
  width: 900px;

  color: #1f0a03;
`;

const CutContainer = styled.div`
  margin-top: -270px;
`;

const Card = styled.div`
  border-radius: 16px;
  background-color: #faf3f1;

  padding: 32px 40px;
`;

const CardText = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 25px;
  font-weight: 600;

  color: #1f0a03;
`;

const CardContainer = styled.div`
  max-width: 380px;
  margin-left: 10%;
`;

const Link = styled.a`
  color: #cb3818;

  font-weight: 900;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 80px 0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 64px;
`;

const Icon = styled.img`
  height: 32px;
  width: auto;
`;

const Spacer = styled.div`
  width: 32px;
`;

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fullylove</title>
      </Head>
      <Wrapper>
        <TextContainer>
          <Text>
            FULL&nbsp;
          </Text>
          <Text>ST</Text>
        </TextContainer>
        <ImageContainer>
          <Image />
          <LineSpacer />
          <Text>
            <Line>----&nbsp;&nbsp;</Line>ACK
          </Text>
        </ImageContainer>
        <CardContainer>
          <Card>
            <CardText>
              Hey! 👋 I'm Tom, a professional nerd based in Cardiff.
            </CardText>
          </Card>
        </CardContainer>
        <SplitTextContainer>
          <AltText>ENGINEER</AltText>
          <Content>
            <ContentText>
              With a love of problem solving and an affinity for design and UX,
              currently working at{" "}
              <Link
                href="https://www.veygo.com"
                target="_blank"
                rel="noreferrer"
              >
                Veygo
              </Link>
              .
            </ContentText>
          </Content>
          <CutContainer>
            <AltText>ENGINEER</AltText>
          </CutContainer>
        </SplitTextContainer>
        <InfoContainer>
          <Card>
            <IconContainer>
              <a
                href="https://github.com/tomfullylove"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src="/github.svg" alt="Github Logo" />
              </a>
              <Spacer />
              <a
                href="https://www.linkedin.com/in/tom-fullylove-6a382a189/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src="/linkedin.svg" alt="Linkedin Logo" />
              </a>
              <Spacer />
              <CardText>
                <Link href="mailto:tom@fullylove.co.uk">
                  tom@fullylove.co.uk
                </Link>
              </CardText>
            </IconContainer>
          </Card>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default Index;
