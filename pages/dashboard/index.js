import React, { Fragment } from "react";
import styled from "styled-components";
const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports']
const profile = ['Your Profile', 'Settings', 'Sign out']

const Container = styled.div`
`
const Nav = styled.div`
    opacity:1;
    background-color:#ccc;
`
const Div = styled.div`
    margin-left:auto;
    margin-right:auto;
    padding-left:1rem;
    padding-right:1rem;
    @media (min-width: 640px) {
          padding-left: 1.5rem/* 24px */;
          padding-right: 1.5rem/* 24px */
    }
    @media (min-width: 1024px) {
          padding-left: 2rem/* 32px */;
          padding-right: 2rem/* 32px */
      }

`
const Div1 = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:3rem;
`
const Div2 = styled.div`
    display:flex;
    align-items:center;
`
const Div3 = styled.div`
      display:flex;
      flex: 1 1 0%;
      align-items:center;
      justify-content: center;
      @media(min-width:640px){
          align-item:stretch;
      }
      @media(min-width:640px){
        justify-content:flex-start;
    }
`
const Img = styled.img`
display:block;
      height:2rem;
      width:auto;
      @media(min-width:1024px){
          display:none;
      }
`
const ImgBt = styled.img`
display:none;
      height:2rem;
      width:auto;
      @media(min-width:1024px){
        display:block;
    }
`
const DivImg = styled.div`
flex-shrink:0;
display:flex;
align-items:center;
`
const Div4 = styled.div`
      display:none;
      @media (min-width:1024px){
          display:block
      }
`
const Div5 = styled.div`
      margin-left:2.5rem;
      display:flex;
      align-items:baseline;
     margin-right: 2.5rem;
`
const Link = styled.a`
  opacity: 1;
  background-color: #ccc;
  color:#fff;
  padding-left:0.75rem;
  padding-right:0.75rem;
  padding-top: 0.5rem/* 8px */;
  padding-bottom: 0.5rem/* 8px */;
  border-radius: 0.375rem/* 6px */;
  font-size:0.875rem;
  line-height:1.25rem;
  font-weight:500;
  margin-right: 1rem;
  &:hover{background-color:rgba(55, 65, 81)}
`
const Link1 = styled.a`
  opacity: 1;
  background-color: rgba(55, 65, 81);
  color:#fff;
  padding-left:0.75rem;
  padding-right:0.75rem;
  padding-top: 0.5rem/* 8px */;
  padding-bottom: 0.5rem/* 8px */;
  border-radius: 0.375rem/* 6px */;
  font-size:0.875rem;
  line-height:1.25rem;
  font-weight:500;
  margin-right: 1rem;
  &:hover{background-color:rgba(55, 65, 81)}
`

const Div6 = styled.div`
      display:none;
      @media(min-width:768px){
          display:block;
      }
     
`

const Div7 = styled.div`
      margin-left:1rem;
      display:flex;
      align-items:center;
      @media(min-width:768px){
          margin-left:1.5rem;
      }
`
const Img1 = styled.img`
height:2rem;
width:2rem;
border-radius:999rem;
`
const Dashboard = () => {
    const onAddClass = (event) => {
        const id = event.target.id

        // if (id !== null && id!=='Dashboard'){
        //     document.getElementById(id).style.backgroundColor = 'rgba(55, 65, 81)';
        // }else{
        //     document.getElementById('Dashboard').style.backgroundColor = 'rgba(55, 65, 81)';
        // }

    }
    return (
        <Container >
            <Nav>
                <Div>
                    <Div1>
                        <Div2>
                            <Div3>
                                <DivImg>
                                    <Img src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                    <ImgBt src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
                                </DivImg>
                            </Div3>
                            <Div4>
                                <Div5>
                                    {navigation.map((nav, idx) => {

                                        return (idx === 0 ? (

                                            <Link1 id={nav} onClick={onAddClass} key={idx} >{nav}</Link1>

                                        ) :
                                            (

                                                <Link id={nav} key={idx} onClick={onAddClass} >{nav}</Link>

                                            ))

                                    })}
                                </Div5>

                            </Div4>
                        </Div2>
                        <Div6>
                            <Div7>
                                <Img1 src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='image' />
                            </Div7>
                        </Div6>
                    </Div1>
                </Div>
            </Nav>

        </Container>
    );
}

export default Dashboard;
