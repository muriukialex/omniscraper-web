"use strict";(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[755],{8755:(t,e,o)=>{o.r(e),o.d(e,{FilteredVideos:()=>Z,default:()=>y});var a=o(2928),n=o(5785),s=o(5671),r=o(3144),i=o(7326),c=o(136),l=o(6215),d=o(1120),u=o(4942),f=o(7294),h=o(9669),p=o.n(h),g=o(1203);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=(0,d.Z)(t);if(e){var n=(0,d.Z)(this).constructor;o=Reflect.construct(a,arguments,n)}else o=a.apply(this,arguments);return(0,l.Z)(this,o)}}var m=f.lazy((function(){return Promise.all([o.e(83),o.e(593)]).then(o.bind(o,2083))})),Z=function(t){(0,c.Z)(o,t);var e=v(o);function o(t){var a;return(0,s.Z)(this,o),a=e.call(this,t),(0,u.Z)((0,i.Z)(a),"loadVideos",(function(){var t=a.state,e=t.limit,o=t.offset,s=a.props.match.params.slug,r="/api/tags/".concat(s,"?limit=").concat(e,"&offset=").concat(o);a.setState({loading:!0},(function(){p().get(r).then((function(t){var s=t.data.videos;a.setState({loading:!1,videos:[].concat((0,n.Z)(a.state.videos),(0,n.Z)(s)),offset:o+e,hasMore:t.data.has_more})})).catch((function(t){a.setState({error:t.message,loading:!1})}))}))})),a.state={error:!1,loading:!1,videos:[],loadingTags:!1,slug:a.props.match.params.slug,limit:12,offset:0,hasMore:!0,videosLoadingError:!1},a}return(0,r.Z)(o,[{key:"componentDidMount",value:function(){this.loadVideos()}},{key:"componentDidUpdate",value:function(t){var e=this;t.match.params.slug!==this.props.match.params.slug&&this.setState({slug:this.props.match.params.slug,videos:[],offset:0},(function(){return e.loadVideos()}))}},{key:"render",value:function(){var t=this.state,e=t.loading,o=t.videos,n=t.hasMore,s=t.videosLoadingError,r=this.props,i=(r.classes,r.loggedIn),c=r.videoTags,l=r.loadTags,d=r.location,u=r.handleScrollPosition,h=d.pathname.split("/"),p=h[h.length-1];return f.createElement(f.Fragment,null,(0,a.Z)(m,{loggedIn:i,videos:o,videoTags:c,loading:e,hasMore:n,error:s,loadVideos:this.loadVideos,loadTags:l,clickedTag:p,scrollPosition:0,handleScrollPosition:u}))}}]),o}(f.Component);const y=(0,g.EN)(Z)}}]);