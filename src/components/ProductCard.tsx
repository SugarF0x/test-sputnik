import styled from "styled-components"

export interface ProductCardProps {
  title: string
  origin: string
  price: number
  currency: string
  imageUrl: string
}

export const ProductCard = (props: ProductCardProps) => {
  const { title, imageUrl, origin, currency, price } = props

  return (
    <Wrapper>
      <HeaderContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Origin>{origin}</Origin>
        </TitleContainer>
        <PriceContainer>
          <Price>{price}</Price>
          <Currency>{currency}</Currency>
        </PriceContainer>
      </HeaderContainer>
      <img src={imageUrl} alt="some_image.jpeg"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: steelblue;
  border-radius: 12px;
  padding: 24px 12px;
  max-width: 600px;
  flex-grow: 1;
`

const HeaderContainer = styled.div``
const TitleContainer = styled.div``
const PriceContainer = styled.div``
const Title = styled.text``
const Origin = styled.text``
const Price = styled.text``
const Currency = styled.text``
