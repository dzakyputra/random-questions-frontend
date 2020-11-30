import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://random-questions-backend-t6lmiokecq-as.a.run.app`
})

class Generator extends React.Component {

    state = {
        id: 0,
        question: 'Your question will appear here',
        loading: false
    }

    getQuestion = async () => {

        this.setState({ loading: true })

        let res = await api.get('/questions/random')
        
        this.setState({ id: res.data.data.ID, 
                        question: res.data.data.Question,
                        loading: false })
    }

    render () {
        
        return  <div className="py-10 bg-blue-500">

                    <div className="flex justify-center">
                        <button onClick={this.getQuestion} style={{cursor:"pointer"}} className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-8 lg:text-lg text-sm rounded-xl">
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
                                
                                <div className={"block mt-1 lg:text-3xl leading-tight md:text-xl text-base text-center " + (this.state.id === 0 ? 'text-gray-400' : 'text-black')}> 

                                    { this.state.loading ? 

                                      <div className="flex justify-center">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-500 w-10 h-10 animate-spin">
                                              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                          </svg>
                                      </div> : this.state.question }
                                    
                                </div>

                                    {/* <p className="mt-2 text-gray-500 text-xs">#random</p> */}
                            </div>
      
                    </div>

                </div>;
    }

}

export default Generator;