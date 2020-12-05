import React from 'react';
import { ReactMic } from 'react-mic';
import Counter from './Counter';
 
class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      downloadLink: ''
    }
  }
 
  startRecording = () => {
    this.setState({ record: true, downloadLink: '' });
  }
 
  stopRecording = () => {
    this.setState({ record: false });
  }
 
  onStop = (recordedBlob) => {
    this.setState({ downloadLink: recordedBlob });
  }

  downloadAudio = () => {
    const link = document.createElement('a');
    link.href = this.state.downloadLink.blobURL;
    link.setAttribute('download', 'audio.webm');
    document.body.appendChild(link);
    link.click();
  }
 
  render() {
    return (
        <div className="h-1/3 bg-blue-500">
        
            <div className="flex justify-center -mb-5">
                <ReactMic
                    record={this.state.record}
                    className="sound-wave w-1/2 lg:w-1/3"
                    onStop={this.onStop}
                    strokeColor="#FBFBFB"
                    backgroundColor="#3B82F6" 
                />
            </div>

            <div className="flex justify-center">

                <audio className={"mb-5 " + (this.state.downloadLink !== '' ? "" : "invisible")} controls="controls" src={this.state.downloadLink.blobURL} />

            </div>

            <div className={"flex justify-center mb-5 " + (this.state.record ? "-mt-10" : "-mt-5")}>

              {this.state.record ? <Counter /> : null}  

            </div>

            <div className={"flex justify-center " + (this.state.downloadLink !== '' ? "" : "-mt-0")} play="true">

                <button className="bg-blue-500 mx-2" onClick={this.startRecording} type="button" disabled={this.state.record ? true : false}>
                  <svg className={"h-10 w-10 " + (this.state.record ? "text-gray-400" : "text-white hover:text-blue-200")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>

                <button className="bg-blue-500 mx-2" onClick={this.stopRecording} type="button" disabled={this.state.record ? false : true}>
                  <svg className={"h-10 w-10 " + (this.state.record ? "text-white hover:text-blue-200" : "text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button className="bg-blue-500 mx-2" onClick={this.downloadAudio} type="button" disabled={this.state.downloadLink === '' ? true : false}>
                  <svg className={"h-10 w-10 " + (this.state.downloadLink !== '' ? "text-white hover:text-blue-200" : "text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </button>

            </div>
      </div>

      
    );
  }
}

export default Recorder;