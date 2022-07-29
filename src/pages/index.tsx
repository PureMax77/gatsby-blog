import React, { FunctionComponent } from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'
import ProfileImage from 'components/Main/ProfileImage'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'

const CATEGORY_LIST = {
  제니스: 5,
  크로아: 3,
  리부트1: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
