import styled from "styled-components"
import { useMemo } from "react"

export interface ProductCardProps {
  title: string
  origin: string
  price: number
  currency: string
  imageUrl: string
}

export const ProductCard = (props: ProductCardProps) => {
  const { title, imageUrl, origin, currency, price } = props

  const formattedPrice = useMemo(() => {
    if (!SUPPORTED_CURRENCIES_FOR_FORMAT.has(currency)) return (price / 100).toFixed(2)
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(price / 100)
  }, [currency, price])

  return (
    <Wrapper>
      <HeaderContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Origin>{origin}</Origin>
        </TitleContainer>
        <PriceContainer>
          <Price>{formattedPrice}</Price>
        </PriceContainer>
      </HeaderContainer>
      <Image src={imageUrl} alt="some_image.jpeg" />
    </Wrapper>
  )
}

const SUPPORTED_CURRENCIES_FOR_FORMAT = new Set(['RUB', 'EUR', 'USD'])

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: steelblue;
  border-radius: 12px;
  padding: 24px 12px;
  max-width: 600px;
  max-height: 400px;
  flex-grow: 1;
  gap: 8px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TitleContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: flex-end;
`

const PriceContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: flex-end;
`

const Title = styled.span``

const Origin = styled.span`
  opacity: .75;
  font-size: .75em;
`

const Price = styled.span``

const Image = styled.img`
  max-height: 300px;
`
