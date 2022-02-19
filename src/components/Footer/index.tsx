import * as Styled from './styles';

const Footer = () => (
  <Styled.Wrapper>
    <Styled.Content>
      <Styled.MarvelCopyright>
        Data provided by Marvel. © 2020 MARVEL
      </Styled.MarvelCopyright>
      <Styled.DevelopedBy>
        Developed by <span className="developer">Giovani</span> and{' '}
        <span className="developer">Luís</span>
      </Styled.DevelopedBy>
    </Styled.Content>
  </Styled.Wrapper>
);

export default Footer;
