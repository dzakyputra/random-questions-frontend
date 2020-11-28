import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://206.189.80.196:8080`
})

class Main extends React.Component {

    state = {
        id: 0,
        question: 'Your question will appear here'
    }

    getQuestion = async () => {

        let res = await api.get('/questions/random')
        this.setState({ id: res.data.data.ID, 
                        question: res.data.data.Question })
    }

    render () {
        
        return  <div className="h-full bg-blue-500">

                    <div className="flex justify-center">
                        <button onClick={this.getQuestion} style={{cursor:"pointer"}} className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-8 lg:mt-2 mt-5 lg:text-lg text-sm rounded-xl">
                            <div className="md:flex">
                                Generate Question
                            </div>
                        </button>
                    </div>

                    <div className="lg:w-3/6 w-9/12 mx-auto bg-white rounded-xl shadow-xl overflow-hidden justify-center mt-10">

                            <div className="p-8">
                                
                                {/* <div className="uppercase tracking-wide text-xs font-bold text-blue-500 text-center">
                                    Question ID: {this.state.id}
                                </div> */}
                                
                                <p className={"block mt-1 lg:text-3xl leading-tight md:text-xl text-base text-center " + (this.state.id === 0 ? 'text-gray-400' : 'text-black')}> 
                                    {this.state.question} 
                                </p>
                                
                                    {/* <p className="mt-2 text-gray-500 text-xs">#random</p> */}
                            </div>
      
                    </div>

                </div>;
    }

}

export default Main;