// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );
class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadVideos = this.loadVideos.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  loadVideos(videos) {
    this.setState({'videos': videos});
  }
  
  componentDidMount() {
    this.props.searchYouTube({query: 'dogs'}, this.loadVideos);
  }

  handleTextChange(event) {
    this.props.searchYouTube({query: event.nativeEvent.target.value}, this.loadVideos);
  }

  render() {
    return (
      <div>
        <Nav extra={this.handleTextChange} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} appView={this} />
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
