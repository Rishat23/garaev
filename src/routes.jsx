import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./components/about";
import App from "./components/app";
import Content from "./components/content";
import Main from "./components/main";


const Routes = () =>
	 (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' render={() => <App> <Content> <Main/> </Content> </App>}/>
				<Route exact path='/about' render={() => <App><Content> <About/> </Content></App>} />
				<Route exact path='/fundamentals-wireless-network-technologies' render={() => <App><Content> </Content></App>} />
			</Switch>
		</BrowserRouter>
	)


export default Routes
