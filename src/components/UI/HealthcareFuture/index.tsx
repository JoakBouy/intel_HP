import { Wrapper, Inner, Header, CardContainer, Card, TextCtn, SVGCtn, Stats, Stat, Banner } from './styles';
import MaskText from '@/components/Common/MaskText';
import { cardsInfo, desktopHeaderPhrase, desktopParagraphPhrase, mobileHeaderPhrase, mobileParagraphPhrase, stats } from './constants';

const HealthcareFuture = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <>
            <MaskText phrases={mobileHeaderPhrase} tag="h1" />
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          </>
        </Header>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn></SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        <video autoPlay loop muted playsInline>
          <source src="/future_banner.mp4" type="video/mp4" />
        </video>
      </Banner>
    </Wrapper>
  );
};

export default HealthcareFuture;