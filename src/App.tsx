import { ProductCard } from "./components"
import { useState } from "react"
import styled from "styled-components"

export const App = () => {
  const [title, setTitle] = useState('Sample')
  const [origin, setOrigin] = useState('Country')
  const [price, setPrice] = useState('34900')
  const [currency, setCurrency] = useState(CURRENCIES[0])
  const [imageUrl, setImageUrl] = useState('https://placehold.co/200x100')

  return (
    <Wrapper>
      <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="text" placeholder="origin" onChange={(e) => setOrigin(e.target.value)} value={origin} />
      <input type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price} />
      <input type="text" placeholder="imageUrl" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />

      <CurrencyGroup>
        {CURRENCIES.map(item => (
          <label>
            <input type="radio" value={item} checked={item === currency} onChange={(e) => setCurrency(e.currentTarget.value)} />
            {item}
          </label>
        ))}
      </CurrencyGroup>

      <ProductCard
        title={title}
        origin={origin}
        price={parseInt(price)}
        currency={currency}
        imageUrl={imageUrl}
      />
    </Wrapper>
  )
}

const CURRENCIES = ['RUB', 'EUR', 'USD']

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CurrencyGroup = styled.div`
  display: flex;
`
