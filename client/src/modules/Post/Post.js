import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons/index'

import './Post.css'

class Post extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: "",
			date: "",
			comments: "",
			content: '',
			next: {
				link: 'met-gala',
				name: 'Jak religia inspituje modę? - MET Gala'
			},
			prev: {
				link: '/torebka-koszyk',
				name: 'Torebka koszyk - letni must-have!'
			},
		}
	}
	componentDidMount() {
		// Fetch
		const {title, date, comments, content} = data
		this.setState({
			title,
			date,
			comments,
			content
		})
	}

	render() {
		const {title, date, comments, content, next, prev} = this.state
		return(
			<section className="blog__post post">
				<header className="post__header">
					<div className="post__hero">
						<h2 className="post__title">{title}</h2>
						<div className="post__info">
							<p className="post__date">{date}</p>
							<p className="post__comments-number">{comments.length} Comments</p>
						</div>
						<div className="post__social">
							<a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
							<a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
							<a href="http://www.google.com"><FontAwesomeIcon icon={faGoogle}/></a>
							<a href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
							<a href="http://www.pinterest.com"><FontAwesomeIcon icon={faPinterest}/></a>
						</div>
					</div>
				</header>
				<article className="post__content">
					{content}
				</article>
				<footer className="post__footer">
					<div className="post__change">
						<Link to={prev.link} className="post__prev">{prev.name}</Link>
						<Link to={next.link} className="post__next">{next.name}</Link>
					</div>
				</footer>
			</section>
		)
	}
}

export default Post;

const data = {
	"title": "Lody jagodowe",
	"date" : "7.05.2018",
	"comments": ["123sd123as123", "123sd123as123", "123sd123as123", "123sd123as123", "123sd123as123", "123sd123as123"],
	content:
		<div>
			<p>W poście o trendach wiosna/lato 2018 już w pierwszym akapicie pisałam o sorbetowym zawrocie głowy, który funduje Nam moda w tym sezonie. Na wybiegach królują pastele! Tym razem to nie pudrowy róż czy mięta grają pierwsze skrzypce, ale jasny żółty oraz…rozbielony fiolet.</p>
			<p>Jak dokładnie wygląda ten kolor? Zamknijcie oczy i wyobraźcie sobie pole lawendy…albo jagodowe lody…albo kwiaty bzu…!</p>
			<img src={require('./images/post-1.content-1.jpg')} alt=""/>
			<p>Pytacie z czym jeść takie jagodowe lody? Wszystkie pastele dobrze czują się w swoim towarzystwie. Połączenie pudrowego różu, baby blue i jasnego fioletu – nigdy Was nie zawiedzie. Taka kombinacja będzie świetna na letnie uroczystości, takie jak komunie czy wesela, i doskonale sprawdzi się na randce 😀 Doda Wam delikatności i świeżości – dziewczęcego uroku.</p>
			<img src={require('./images/post-1.content-2.png')} alt=""/>
			<p>Co jeżeli nie chcesz być rusałką, a wolisz wyglądać jak „lawendowa kobieta sukcesu”? Połącz naszą jagodę z brązem, szarościami, kremowym, a nawet UWAGA bordowym i krwistą czerwienią!</p>
			<img src={require('./images/post-1.content-3.png')} alt=""/>
			<h2>MOJA PROPOZYCJA</h2>
			<p>Ci którzy dobrze mnie znają wiedzą, że nie mam nic wspólnego ze sportowym stylem, ale tym razem chciałam zrobić wyjątek. Modne w tym sezonie spodnie paperbag, w kolorze lawendowym, połączyłam z pasującymi do nich butami – tworząc total look. Na górę wybrałam krótką, pudrową, jeansową kurtkę. </p>
			<h2>NA ZDJĘCIACH MAM NA SOBIE</h2>
			<ol>
				<li><a href="http://www.hm.pl">Kurtka jeansowa = H&M</a></li>
				<li><a href="http://www.hm.pl">Spodnie - MANGO</a></li>
				<li><a href="http://www.hm.pl">Buty - Reebok x Local Heroes</a></li>
			</ol>
			<img src={require('./images/post-1.content-4.jpg')} alt=""/>
			<img src={require('./images/post-1.content-5.jpg')} alt=""/>
			<img src={require('./images/post-1.content-6.jpg')} alt=""/>
			<img src={require('./images/post-1.content-7.jpg')} alt=""/>
			<img src={require('./images/post-1.content-8.jpg')} alt=""/>
			<img src={require('./images/post-1.content-9.jpg')} alt=""/>
			<img src={require('./images/post-1.content-10.jpg')} alt=""/>
			<img src={require('./images/post-1.content-11.jpg')} alt=""/>
			<img src={require('./images/post-1.content-12.jpg')} alt=""/>
			<img src={require('./images/post-1.content-13.jpg')} alt=""/>
			<img src={require('./images/post-1.content-14.jpg')} alt=""/>
			<img src={require('./images/post-1.content-15.jpg')} alt=""/>
			<img src={require('./images/post-1.content-16.jpg')} alt=""/>
			<img src={require('./images/post-1.content-17.jpg')} alt=""/>
			<h2>ZAINSPIRUJ SIĘ</h2>
			<img src={require('./images/post-1.content-18.png')} alt=""/>
		</div>
}
