import Heading from 'components/Heading';
import { formatCurrencyUSD } from 'utils/formatCurrencyUSD';
import { formatDate } from 'utils/formatDate';
import * as Styled from './styles';
import { InformativeCardProps } from './types';

const InformativeCard = ({
  image = '',
  heroName = '',
  description = '',
  variant = 'minimal',
  comicsLaunchDate,
  comicsPageQuantity,
  price,
  title,
}: InformativeCardProps) => (
  <Styled.Wrapper variant={variant}>
    <Styled.ImageWrapper variant={variant} src={image} />
    <Styled.InfoContent variant={variant}>
      <Heading
        fontSize={variant === 'fullInformations' ? 30 : 42}
        responsiveSize={variant === 'fullInformations' ? 30 : 32}
      >
        {heroName || title}
      </Heading>
      {variant === 'fullInformations' && (
        <Styled.ComicsInfo>
          {comicsLaunchDate && (
            <Styled.ComicsItem>
              {formatDate(comicsLaunchDate)}
            </Styled.ComicsItem>
          )}
          {comicsPageQuantity && (
            <Styled.ComicsItem>{comicsPageQuantity} pages</Styled.ComicsItem>
          )}
          {price && (
            <Styled.ComicsItem>{formatCurrencyUSD(price)}</Styled.ComicsItem>
          )}
        </Styled.ComicsInfo>
      )}
      <Styled.Description variant={variant}>{description}</Styled.Description>
    </Styled.InfoContent>
  </Styled.Wrapper>
);

export default InformativeCard;
