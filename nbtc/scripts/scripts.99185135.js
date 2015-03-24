"use strict";angular.module("nbtc2015App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/conference",{templateUrl:"views/conference.html",controller:"ConferenceCtrl"}).when("/sponsors",{templateUrl:"views/sponsors.html",controller:"SponsorsCtrl"}).when("/speakers",{templateUrl:"views/speakers.html",controller:"SpeakersCtrl"}).when("/team",{templateUrl:"views/team.html",controller:"TeamCtrl"}).when("/gic",{templateUrl:"views/gic.html",controller:"GicCtrl"}).when("/ec",{templateUrl:"views/ec.html",controller:"EcCtrl"}).when("/ecJudges",{templateUrl:"views/ecjudges.html",controller:"EcjudgesCtrl"}).when("/ecFaq",{templateUrl:"views/ecfaq.html",controller:"EcfaqCtrl"}).when("/ecQualify",{templateUrl:"views/ecqualify.html",controller:"EcqualifyCtrl"}).when("/subsidies",{templateUrl:"views/subsidies.html",controller:"SubsidiesCtrl"}).when("/schedule",{templateUrl:"views/schedule.html",controller:"ScheduleCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("nbtc2015App").controller("MainCtrl",function(){}),angular.module("nbtc2015App").controller("AboutCtrl",function(){}),angular.module("nbtc2015App").directive("slide",["slideService",function(a){return{restrict:"A",scope:{slide:"@"},link:function(b,c){c.on("click",function(){a.slide(b.slide)}),c.addClass("go-"+b.slide),c.tooltip({placement:a.oppositeUtil(b.slide,!0)})}}}]),angular.module("nbtc2015App").service("slideService",["$rootScope",function(a){var b={changeDirection:function(a){angular.forEach(document.getElementsByClassName("page"),function(b){angular.element(b).removeClass("slideup slidedown slideleft slideright").addClass("slide"+a)})},slide:function(c){var d=a.$watch(function(){return document.getElementsByClassName("page").length},function(a){2===a&&(b.changeDirection(c),d())})},oppositeUtil:function(a,b){var c;switch(a){case"up":c="down";break;case"down":c="up";break;case"left":c="right";break;case"right":c="left"}return b&&("up"===c?c="top":"down"===c&&(c="bottom")),c}};return b}]),angular.module("nbtc2015App").controller("ContactCtrl",["$scope",function(a){a.connectLinks=[{icon:"fa-youtube",url:"https://www.youtube.com/user/NspireInnovationNet"},{icon:"fa-twitter",url:"https://twitter.com/NspireNetwork"},{icon:"fa-facebook",url:"https://www.facebook.com/NspireNetwork"},{icon:"fa-linkedin",url:"https://www.linkedin.com/company/nspire-innovation-network"},{icon:"fa-instagram",url:"http://instagram.com/nspirenetwork"}]}]),angular.module("nbtc2015App").controller("ConferenceCtrl",["$scope",function(a){a.figures=[{number:"275",desc:"delegates"},{number:"20",desc:"world class speakers"},{number:"12",desc:"professional workshops"},{number:"20+",desc:"prominent sponsors"},{number:"2",desc:"fierce competitions"},{number:"$30k+",desc:"prizes"},{number:"45+",desc:"hours of experience"},{number:"∞",desc:"big ideas"},{number:"1",desc:"epic weekend"}]}]),angular.module("nbtc2015App").controller("SponsorsCtrl",["$scope",function(a){a.sponsors={gold:[{url:"http://www.mbna.ca/",img:"images/sponsors/mbna.3b534ca0.jpg"}],silver:[{url:"http://startupsource.ca/",img:"images/sponsors/airdberlis.20c8ef4a.png"},{url:"https://uwaterloo.ca/conrad-business-entrepreneurship-technology/",img:"images/sponsors/conrad.aaf50f86.png"}],bronze:[{url:"http://www.rbc.com/careers/campus-recruitment/technology-operations.html",img:"images/sponsors/rbc.a32419c4.png"},{url:"http://www.mckinsey.com/",img:"images/sponsors/mckinseyco.09e5df98.png"},{url:"http://www.shopify.ca/",img:"images/sponsors/shopify.6cd94859.png"},{url:"http://www.accenture.com/us-en/pages/index.aspx",img:"images/sponsors/accenture.bd255e87.gif"},{url:"http://www.rlsolutions.com/",img:"images/sponsors/rl-solutions.0ab808e7.jpg"},{url:"http://www.ge.com/ca/careers",img:"images/sponsors/ge.0a165a3a.jpg"},{url:"http://www2.deloitte.com/ca/en.html",img:"images/sponsors/Deloitte.5a53cee5.gif"},{url:"http://news.communitech.ca/",img:"images/sponsors/Communitech_CMYK.03143988.jpg"}],supporters:[{url:"http://www.peo.on.ca/",img:"images/sponsors/peo.b9dadcb1.png"},{url:"http://sabetaip.com/",img:"images/sponsors/sabeta-ip.3ab54462.svg"},{url:"http://www.sustainalytics.com/",img:"images/sponsors/sustainalytics.caba6ad6.jpg"},{url:"http://www.eventmobi.com",img:"images/sponsors/Eventmobi.e6a707db.png"},{url:"http://www.zeitdice.com/",img:"images/sponsors/zeitdice-1.be7143bb.png"},{url:"https://helphub.me/",img:"images/sponsors/helphub.2fc16873.png"}]}}]),angular.module("nbtc2015App").controller("SpeakersCtrl",["$scope","blurbService",function(a,b){a.blurb=b,a.filterClass="",a.filterSpeakers={byRole:function(b){a.filterClass="filter-"+b},resetRole:function(){a.filterClass=""},byElement:function(b){a.filterClass="filter-all",angular.element(b.currentTarget).addClass("selected")},resetElement:function(b){a.filterClass="",angular.element(b.currentTarget).removeClass("selected")}},a.speakers=[{name:"Mark Zimmerman",title:"Senior Advisor & CIO, MaRS Discovery District",twitter:"https://twitter.com/markzim",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Mark-Zimmerman.ce1b2f73.jpg",blurb:"<p>Mark Zimmerman has been working in the information and communication technology industry for more than 15 years. He’s worked with some of the biggest companies in the industry, but he’s also worked with very early stage start-ups—so he knows what it’s like to be in an entrepreneur’s shoes. Mark uses his experience to help MaRS clients in the areas of B2B enterprise software and SaaS business models as well as security and privacy.</p><p><em>“I love new ideas—they get me excited every morning and keep me going throughout the day. At MaRS, I get to see new ideas grow, evolve, change shape and, eventually, become real businesses. It’s a fascinating place to be.”<em></p>"},{name:"Sarah Stockdale",title:"Growth - Tilt",twitter:"https://twitter.com/skstock",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Sarah-Stockdale.18461c88.jpg",blurb:"<p>Sarah is the Growth Manager for Tilt Canada, responsible for overseeing all growth efforts for Tilt’s international expansion to Canada. Before joining Tilt, Sarah was one of the first Growth Marketers at Wave, a Canadian venture backed startup.</p><p>Sarah is also the co-founder  of PageNerd (in beta); a tool that helps marketers create beautiful design. She is also the Director of Speakers for TEDxDistilleryDistrictWomen, and a Nuance Leadership professional speaker. Sarah is passionate about technology, and creating safe spaces for women in STEM.</p>"},{name:"Ali Zahid",title:"Co-founder & COO, Vanhawks",twitter:"https://twitter.com/alizhd",facebook:"",linkedin:"",link:"https://www.vanhawks.com/",role:"workshop",img:"images/speakers/Ali-Zahid.6a04ef4c.jpg",blurb:""},{name:"Jean Luc David",title:"API & Development Consultant, TouchTunes",twitter:"https://twitter.com/jldavid",facebook:"",linkedin:"",link:"",role:"panelist",img:"images/speakers/Jean-Luc-David.9be06edb.jpg",blurb:"<p>Jean-Luc is a senior software developer & technology executive, specializing in web, mobile, and wearable technologies such as Google Glass. He’s a team player, having worked at both small startups and large corporations such as Microsoft and Yellow Pages Group Canada.</p><p>Jean-Luc's work has been featured on TechCrunch, Engadget, CNN, BetaKit, TechVibes, Wired, Mashable, New York Observer, MSN, Facebook's Official Blog, CTV News, CBC News, and the Montreal Gazette. He's been a speaker at events around the world, and has written five technical books and dozens of articles for Wiley Publishing, CNET, TechRepublic, and Builder.com.</p>"},{name:"Michael Hyatt",title:"Executive Chairman and Co-Founder, Bluecat Networks, Dragon’s Den",twitter:"https://twitter.com/mhyattbluecat",facebook:"",linkedin:"",link:"http://www.cbc.ca/dragonsden/nextgenden",role:"keynote",img:"images/speakers/Michael-Hyatt.0f7e5f5f.png",blurb:"<p>Michael Hyatt is the Executive Chairman and Co-Founder of Bluecat. He is a weekly business commentator on CBC News Network and one of the new \"Dragons\" on CBC's Next Gen Den - Dragon's Den. Michael is also a member of the G7 Team at University of Toronto's Creative Destruction Lab and on the CEO Board of Advisors at Georgian Partners. Michael also co-founded Dyadem, a highly successful software company that was acquired by IHS (NYSE: IHS). He is also a finalist in Ernst & Young's Entrepreneur of the Year Award, a recipient of the Top 40 Under 40™ Award and Chairs his families' charitable foundation.</p>"},{name:"Tom Emrich",title:"WeAreWearables",twitter:"https://twitter.com/tomemrich",facebook:"",linkedin:"",link:"http://www.wearewearables.com/",role:"keynote",img:"images/speakers/Tom-Emrich.92947816.jpg",blurb:"<p>As a writer, consultant and community builder, Tom Emrich uses his passion for new technologies to act as a catalyst to bring on the future. He founded We Are Wearables, an organization that rallies the tech community together to learn, discuss and celebrate the wearable tech space in order to foster adoption and facilitate innovation.  We Are Wearables currently has chapters in Toronto and Chicago. Tom writes regularly about wearables and other emerging technologies for MobileSyrup, BetaKit and Designers of Things. He also works with startups, and large organizations as an advisor and consultant offering assistance on product development, marketing and organizational strategy.</p>"},{name:"Joseph Wilson",title:"Senior Strategist, Education - MaRS",twitter:"https://twitter.com/joeatmars",facebook:"",linkedin:"",link:"http://www.josephwilson.ca/",role:"panelist",img:"images/speakers/Joseph-Wilson.1910b15d.jpg",blurb:"<p>Joseph is currently working as an Education Advisor at  MaRS Discovery District, working with education technology entrepreneurs. He developed the Entrepreneur’s Toolkit Workshop Series, and consults on a wide range of educational programming.</p><p>He writes on topics of science, culture and city issues for NOW Magazine, the Globe and Mail, Spacing and Yonge Street. He has edited two books and written many academic papers in astronomy, education, entrepreneurship and innovation strategies. He has also appeared on CityTV, the Space Network, CBC, CTV and Talk TV.</p>"},{name:"Daniel Rodic",title:"Co-Founder & Head of Network Growth - Exact Media",twitter:"https://twitter.com/danielrodic",facebook:"",linkedin:"https://www.linkedin.com/in/danielrodic",link:"",role:"workshop",img:"images/speakers/Daniel-Rodic.ec6c63ab.jpg",blurb:"<p>Daniel Rodic is the Co-Founder of Exact Media, his third company in the marketing and advertising industry. Exact Media's mission is to help people experience the world's greatest brands in the moments that matter. World-class brands owned by companies like Procter & Gamble, L'Oréal, Unilever and Johnson & Johnson use Exact Media's Smart Sampling platform, to deliver their products to consumers in their home, alongside a contextually relevant online purchase.</p><p>Prior to starting Exact Media, Daniel was Managing Director of Luxe Box, which was one of the largest eCommerce subscription services in Canada. During his tenure, it was the targeted sampling solution of choice for prestige brands owned by L'Oréal, Estée Lauder, LVMH, Coty and Procter & Gamble. Daniel's first company, DineWithMe, was a mobile marketing solution for restaurants, which was funded by The Next 36, a program backed by some of the wealthiest entrepreneurs and business leaders in North America.</p><p>In his talk, \"Building Relationships by Adding Value\", Daniel will bust the myth that just because you are young and inexperienced, doesn't mean you cannot add value to others who are more senior, experienced or successful in their careers. He will share his thoughts and some tools on how you as a young person can add value to others, helping you unlock new career or business opportunities by simply being helpful to everyone you meet."},{name:"Kim Warburton",title:"Vice President Communications & Public Affairs - GE Canada",twitter:"",facebook:"",linkedin:"",link:"",role:"keynote",img:"images/speakers/Kim-Warburton.556d9159.jpg",blurb:"<p>Kim Warburton is Vice President Communications and Public Affairs, GE Canada and a member of the National Executive Team.  In this role she has oversight for the company’s brand, communications, public affairs and community investment.   Most recently, Kim has led the company’s “Shaping Economic Growth in Canada’s Remote Communities”, initiative including national roundtables, a business survey and final report. Kim has over 20 years of experience in public affairs, communications and government relations.  Prior to joining GE Canada, she was Director, Government Relations and Community Economic Development at Bell Canada.  Kim worked in the media industry for 10-years including marketing, communications and public affairs positions with Viacom Outdoor in Toronto.  She also worked with the government of Ontario, where she held progressively responsible positions in a number of Ministries with a focus on urban and regional planning, skilled trades and the environment.</p><p>An active volunteer, Kim’s community leadership includes: Past Chair of the Trillium Health Centre Foundation and current Board and Executive Committee member, Chair of the Mississauga Economic Development Advisory Committee, and Director of Actua, a national charitable program delivering science and technology programs to youth including Aboriginal outreach.</p>"},{name:"Sarah Prevette",title:"Co-Founder & Managing Partner - BrandProject",twitter:"https://twitter.com/SarahPrevette",facebook:"",linkedin:"https://www.linkedin.com/in/sarahprevette",link:"http://sarahprevette.com",role:"keynote",img:"images/speakers/Sarah-Prevette.7d5ce531.jpg",blurb:"<p>SARAH PREVETTE has a long history of innovative product development. A serial entrepreneur, she was the founder of well-known online properties Sprouter and BetaKit (both of which were acquired) and the co-founder of BrandProject LP – an investment firm that invests in and works with early-stage startups. Inc Magazine named her one of North America’s top entrepreneurs and Canadian Business declared her one of the country’s top 20 “power elite.” She is an active board member of several growing companies and a passionate advocate for meaningful innovation.</p>"},{name:"Avi Pollock",title:"Vice President Innovation & Strategic Planning - RBC",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Avi-Pollock.b9261c6a.jpg",blurb:"<p>Avi Pollock has more than 20 years of experience as both an entrepreneur and intrapreneur.  He is considered an enterprise innovation and change leader with strong business and technology acumen. He has a strong track record of successfully building early-stage companies and implementing transformational initiatives in large, complex, multi-stakeholder organizations.</p><p>As RBC’s Vice President, Innovation and Strategic Planning, Avi leads a team of 30 and is the lead strategist for RBC’s global Technology and Operations (T&O) organization.  He also spearheaded the creation and rollout of RBC’s enterprise social network - branded RBC Connect. His Applied Innovation team has an enterprise-wide mandate to stimulate innovative activity by identifying and validating emerging technologies and opportunities that have the potential to drive client value and differentiate RBC from its competitors.<p>Prior to joining RBC, Avi held executive roles in sales, business operations, and acquisition strategy to technology companies in start-up and growth phases. He previously held the position of EVP, Professional Services for a TSX-listed technology company.</p><p>Avi is a frequent speaker and interview guest on topics including: Building an innovative culture, Creating a social enterprise, Mobile commerce, and The Future of the CIO</p><p>He is also active in charitable and community causes, including: Hillel of Greater Toronto, JDRF, Public Service Advisory Board for Canada's Networks of Centres of Excellence, RBC's Social Finance initiative</p><p>Avi has a Bachelors Degree in Political Science from University of Western Ontario, is a graduate of the joint LLB-MBA program at York University's Osgoode Hall Law School and Schulich School of Business. Avi resides in Toronto, Canada with his wife and two sons.</p>"},{name:"Thea Earl",title:"Business Development Manager - Shopify",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Thea-Earle.69e71023.jpg",blurb:"<p>Thea is a Business Development manager at Shopify, aligning key technology partners in the software as service space. Since joining Shopify two years ago, Thea has been involved with multiple referral and reseller partnerships spanning North America, the UK, and Asia Pacific. In her spare time she enjoys running along the canal in downtown Ottawa, which is partially fuelled by her love of chocolate.</p>"},{name:"Michael Katchen",title:"Founder & CEO of Wealthsimple",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Michael-Katchen.3923f85e.png",blurb:'<p>Michael Katchen is the founder and CEO of Wealthsimple, Canada’s fastest growing online investment manager. His vision is to make smart, simple investing accessible to every Canadian, regardless of age or net worth. Michael is an entrepreneur with a passion for investing. Previously, he led marketing at 1000memories, a Silicon Valley-based startup that was acquired by Ancestry.com in 2012. He returned to Toronto in 2013 to work alongside the best minds in the investment industry to launch Wealthsimple. He won his first investment challenge at 12 years old and consulted for financial institutions with McKinsey & Company when he graduated university. He was recently listed as an "Industry Mover" by the Financial Post and one of the 500 people that will define the next 12 months by Askmen.</p>'},{name:"David Rose",title:"Associate Director Graduate Programs, Conrad Business, Entrepreneurship & Technology Centre",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/DavidRose.a8a80166.jpg",blurb:"<p>David Rose is the Associate Director Graduate Programs at the University of Waterloo’s Conrad Business, Entrepreneurship & Technology Centre where he also teaches undergraduate courses on commercialization and entrepreneurship. Prior to joining Conrad in 2014 he was a Lecturer in the School of Business & Economics at Wilfrid Laurier University, teaching a variety of marketing and strategy courses. Prior to his university career, David was an entrepreneur and a marketing professional in multiple industries.  Since 2006, he has also worked on his own technology start-up, Listen Corporation. He has a BMath from University of Waterloo and an MBA from Wilfrid Laurier University.</p>"},{name:"Karin Schmidlin",title:"Manager, Virtual Incubation Program - Conrad Business, Entrepreneurship and Technology Center",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/KarinSchmidlin.d6644d50.jpg",blurb:"<p>Karin Schmidlin is the manager of the virtual incubation program at the University of Waterloo's Conrad Business, Entrepreneurship and Technology Center. She also teaches User Experience (UX) and Applied Leadership at Waterloo’s digital media campus in Stratford. She is a voracious reader, is passionate about teaching and pretty much runs on black coffee.</p>"},{name:"Margaret Cichosz",title:"Co-founder & CEO, Apartmint",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/MargaretCichosz.007f0ded.jpg",blurb:"<p>Margaret Cichosz graduated from the University of Waterloo with an undergraduate degree in Political Science and Business Co-op and a Master of Business, Entrepreneurship and Technology. Margaret has experience in management, business development and sales, and has been working in the tech industry for the last 5 years. She previously co-founded a tech startup, raised angel funding and went on to co-found and become the CEO of Apartmint, Canada’s newest housing platform.</p>"},{name:"Harvir Bansal",title:"Associate Professor - Conrad Business, Entrepreneurship and Technology Center",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/Harvir-Bansal.69571ac7.jpg",blurb:"<p>Harvir Bansal is an Associate Professor at the Conrad Business, Entrepreneurship and Technology Centre where he teaches Marketing Management and Marketing Strategies for New Technology-based Ventures. He holds a PhD in Marketing and Operations Research from Queen’s University. Harvir also is the Chief Research Officer and Executive VP, Analytics at b3Intelligence.</p>"},{name:"Ashna Mankotia",title:"UX Research Assistant - Conrad Business, Entrepreneurship and Technology Center",twitter:"",facebook:"",linkedin:"",link:"",role:"workshop",img:"images/speakers/AshnaMankotia.d74d8bef.jpg",blurb:"<p>Ashna Mankotia is the UX Research Assistant at Conrad’s virtual incubation program. She is a Global Business and Digital Arts student at the University of Waterloo’s digital media campus in Stratford, passionate about design, marketing and project management in tech spaces. Ashna has worked at the Conrad Centre for a little over a year and loves being in the centre of Waterloo’s growing innovation bubble. One day she hopes to visit every country in the world.</p>"}]}]),angular.module("nbtc2015App").service("blurbService",["$sce",function(a){var b={content:{},isOpen:!1,show:function(c){b.isOpen=!0,c&&c.blurb&&"string"==typeof c.blurb&&(c.blurb=a.trustAsHtml(c.blurb)),b.content=c?c:{}},hide:function(){b.isOpen=!1}};return b}]),angular.module("nbtc2015App").controller("TeamCtrl",["$scope",function(a){a.team=[{name:"Elizabeth de Roode",title:"Chair, NBTC'15",img:"images/team/elizabeth-de-roode.048a2abf.jpg"},{name:"Rebecca Li",title:"Director of Marketing",img:"images/team/rebecca-li.a64e24c5.jpg"},{name:"Amin Sharifi",title:"Director of Events",img:"images/team/amin-sharifi.fbdbda24.jpg"},{name:"Ribhu Rampersad",title:"Director of Operations",img:"images/team/ribhu-rampersad.6c8b21f6.jpg"},{name:"Leyla Beriker",title:"Director of Global Ideas Competition",img:"images/team/leyla-beriker.5fe665ef.jpg"},{name:"Suyoun Jo",title:"Director of Entrepreneurship Competition",img:"images/team/suyoun-jo.13e5aadd.jpg"}]}]),angular.module("nbtc2015App").service("mainMenuService",function(){var a={isOpen:!1,open:function(){a.isOpen=!0},close:function(){a.isOpen=!1}};return a}),angular.module("nbtc2015App").directive("menuButton",["$timeout","mainMenuService",function(a,b){return{template:'<a id="menu-button" ng-click="menu.open()"><i class="fa fa-compass fa-2x fa-fw"></i><span>Menu</span></a>',replace:!0,restrict:"E",link:function(c,d){c.menu=b,a(function(){d.addClass("hover")},2e3)}}}]),angular.module("nbtc2015App").directive("mainMenu",["slideService","mainMenuService",function(a,b){return{template:'<div id="mainmenu" ng-if="menu.isOpen" ng-click="menu.close()"><a class="mainmenu-close" ng-click="menu.hide()"><i class="fa fa-2x fa-times"></i></a><div class="mainmenu-body"><a class="mainmenu-item" ng-repeat="item in items" ng-href="{{ item.uri }}" ng-click="slideService.changeDirection(\'down\')"><div class="mainmenu-icon"><i class="fa fa-4x" ng-class="[item.icon]"></i></div><h2>{{ item.name }}</h2></a></div></div>',restrict:"E",replace:!0,link:function(c){c.menu=b,c.slideService=a,c.items=[{name:"Home",uri:"#/",icon:"fa-home"},{name:"NBTC'2015",uri:"#/conference",icon:"fa-fire"},{name:"About",uri:"#/about",icon:"fa-question"},{name:"Schedule",uri:"#/schedule",icon:"fa-calendar"},{name:"GIC",uri:"#/gic",icon:"fa-globe"},{name:"EC",uri:"#/ec",icon:"fa-trophy"},{name:"Speakers",uri:"#/speakers",icon:"fa-paper-plane-o"},{name:"Subsidies",uri:"#/subsidies",icon:"fa-money"},{name:"Sponsors",uri:"#/sponsors",icon:"fa-star-o"},{name:"Team",uri:"#/team",icon:"fa-users"},{name:"Connect",uri:"#/contact",icon:"fa-comment-o"}]}}}]),angular.module("nbtc2015App").controller("GicCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.toggleInfo=function(a){var b=a.currentTarget.parentElement;$(b).hasClass("showInfo")?($(b).removeClass("showInfo"),$(a.currentTarget).html("Read More  &gt&gt")):($(b).addClass("showInfo"),$(a.currentTarget).html("&lt&lt  Read Less"))}}]),angular.module("nbtc2015App").controller("EcCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("nbtc2015App").controller("EcjudgesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("nbtc2015App").controller("EcfaqCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("nbtc2015App").controller("EcqualifyCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("nbtc2015App").controller("SubsidiesCtrl",function(){}),angular.module("nbtc2015App").controller("ScheduleCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);