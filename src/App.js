import React, { useState } from 'react';
import './App.css';
import first_pic from './img/1.jpg';
import pic2 from './img/2.jpg';
import pic3 from './img/3.jpg';
import pic4 from './img/4.jpg';
import pic5 from './img/5.jpg';
import pic6 from './img/6.jpg';

class SPA extends React.Component {
	constructor(props) {
		super(props);
		const width = window.innerWidth;
		const height = window.innerHeight;
		if(width > 992) {
			this.state = {
				width: width, 
				height: height,
				picWidth: (width*0.8*0.5-80)/2,
				screenResolution: 'large',
			};
		} else {
			this.state = {
				width: width, 
				height: 300,
				picWidth: (width*0.8*0.5-80)/2,
				screenResolution: 'mobile',
			};	
		}
		
	}
	
	componentDidMount() {
		window.addEventListener('resize',() => { 
			this.getWindowDimensions();
			this.handleLoad();
		});
		window.addEventListener('scroll', this.scrollList);
		window.addEventListener('load', this.handleLoad);
		this.getWindowDimensions();
		this.scrollList();
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.getWindowDimensions);
		window.removeEventListener('scroll', this.scrollList);
	}
	
	handleLoad = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const firstPic = this.refs.firstPic.clientHeight;
		this.setState({
			cont_first: this.refs.firstInner.clientHeight,
			cont_second: this.refs.secondInner.clientHeight,
			firstPicTop: (-1)*((firstPic-height)/2),
		});
		console.log(this.state);
	}
	
	scrollList = () => {
		let cont = document.getElementsByClassName("cont");
		let i = 0;
		Array.from(cont).forEach((div) => {
			let post = div;
            let position = div.offsetTop - document.documentElement.scrollTop;
			console.log(position);
            if (position <= 0) {
				if(this.state.screenResolution == 'large' || this.state.screenResolution == 'medium') {
					let str = div.className;
					this.setState({
						[str.substr(5, str.length)]: 'fixScroll '+str.substr(5, str.length),
					});
				}
            } else {
				let str = div.className;
				this.setState({
					[str.substr(5, str.length)]: 'fixScrollNot '+str.substr(5, str.length),
				});
            }
			i++;
		});
	}
	
	getWindowDimensions = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const firstPic = this.refs.firstPic.clientHeight;
		if(this.state.width != width || this.state.height != height) {
			if(width > 992) {
				this.setState({
					width: width, 
					height: height,
					picWidth: (width*0.8*0.5-80)/2,
					screenResolution: 'large',
					firstPicTop: (-1)*((firstPic-height)/2),
				});
			} else {
				this.setState({
					width: width, 
					height: 300,
					picWidth: (width*0.8*0.5-80)/2,
					screenResolution: 'mobile',
				});	
			}
		}
	}
	
	render() {
		if(this.state.screenResolution == 'mobile') {
			return (
				<div className="wrapper">
					<div className="container">
						<div className="catTitle">
							<h2>Kunst</h2>
						</div>
						<div className="cont">	
							<div className={this.state.mainClass + ' main_art'} style={{display: 'block', height: this.state.height, overflow: 'hidden'}}>				
								<img src={first_pic} style={{position: 'absolute', top: 0, minWidth: '100%', height: this.state.height}} />
							</div>
							<div className="list_art">
								<div className="row">
									<div className="article">
										<div className="contImg">
											<img className="listImg" src={pic2}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article">
										<div className="contImg">
											<img className="listImg" src={pic3}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="article">
										<div className="contImg">
											<img className="listImg" src={pic4}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article">
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			console.log(1);
			return (
				<div className="wrapper">
					<div className="container">
					<div className="navi">
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#kunst">Kunst</a></li>
							<li><a href="#design">Design</a></li>
							<li><a href="#kultur">Kultur</a></li>
						</ul>
					</div>
						<div id="kunst" className="catTitle">
							<div className="catTitleDiv">
								<h2>Kunst</h2>
							</div>
						</div>
						<div className="cont first" style={{height: this.state.cont_first}}>	
							<div className={this.state.first + ' main_art'} style={{display: 'block', width: this.state.width*0.8*0.5, height:'100vh', overflow: 'hidden'}}>				
								<img ref="firstPic" src={first_pic} style={{top: this.state.firstPicTop, position: 'absolute', maxWidth: '100%', minHeight: '100%'}} />
							</div>
							<div className="list_art" ref="firstInner" style={{width: this.state.width*0.8*0.5}}>
								<div className="row">
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic2}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic3}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic4}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="catTitle">
							<div className="catTitleDiv">
								<h2>Design</h2>
							</div>
						</div>
						<div className="cont second" style={{height: this.state.cont_second}}>	
							<div className={this.state.second + ' main_art'} style={{display: 'block', width: this.state.width*0.8*0.5, height: '100vh', overflow: 'hidden'}}>				
								<img src={pic2} style={{position: 'absolute', maxWidth: '100%', minHeight: '100%'}} />
							</div>
							<div className="list_art" ref="secondInner" style={{width: this.state.width*0.8*0.5}}>
								<div className="row">
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic2}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic3}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text" style={{bottom: (-1)*(this.state.height/2-this.state.height*0.6)}}>
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic4} width={this.state.picWidth}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
									<div className="article" style={{height: this.state.height/2, width: this.state.picWidth}}>
										<div className="contImg">
											<img className="listImg" src={pic5}/>
											<div className="overlay"></div>
										</div>
										<div className="art_text">
											<div className="title">
												Lorem Ipsum
											</div>
											<div className="text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			)
		}
	};
}

export default SPA;
