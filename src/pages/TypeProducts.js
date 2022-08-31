import { React, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const TypeProducts = () => {
  const { isLoading, products } = useSelector((state) => state.product)
  const params = useParams()
  // Filter Object Here
  const filterObject = products.filter((item) => {
    const filterResult = item.category === params.type
    return filterResult
  })
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <h1 className='title'>
        BurgerQueen <span>/ Menu / {params.type}</span>
      </h1>
      <Link to='/products' className='btn'>
        <MenuOpenIcon /> <p>menu</p>
      </Link>

      <div className='main-container'>
        {filterObject.map((item) => {
          return (
            <article key={item._id} className='container'>
              <Link to={`/products/${params.type}/${item._id}`}>
                <div className='box-1'>
                  <h2>{item.name}</h2>
                  <img src={item.image} alt='' className='img' />
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 64px;
  .title {
    span {
      color: var(--primary-5);
    }
  }

  .btn {
    position: sticky;
    top: 80%;
    left: 80%;
    p {
      display: inline;
    }
    .MuiSvgIcon-root {
      margin-bottom: -5px;
    }
  }

  .main-container {
    display: grid;
    place-items: center;
  }
  .container {
    margin: 1rem;
    max-width: 400px;
  }
  .box-1 {
    max-width: 350px;
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
    }
    h2 {
      margin: 0;
      text-align: center;
      color: var(--primary-5);
    }
    img {
      width: 100%;
    }
  }
  /* media query */
  @media (min-width: 600px) {
    .main-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 900px) {
    .main-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1120px) {
  }
`

export default TypeProducts
