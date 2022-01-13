import React, { Component } from 'react';
import './PasswordGen.css';

class PasswordGen extends Component {
	render() {
        console.log('Inside Password Gen Comp.', this.props.password.num)
        console.log(this.props)
		return (
			<div className="form-container container-md">
                <form>
                <h1>One Pass</h1>
				{/* Generated password will print here */}
				<input
					className="form-control"
					type="text"
					value={this.props.password}
				/>
				{/* toggle settings will be below here */}
				<div className="toggle-settings">
					{/* nums check box */}
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="nums"
                            
						/>
						<label className="form-check-label" htmlFor="nums">
							Numbers
						</label>
					</div>
					{/* char check box */}
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
	
							id="char"
              
						/>
						<label className="form-check-label" htmlFor="char">
							Characters
						</label>
					</div>
					{/* caps check box */}
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							id="caps"
						/>
						<label className="form-check-label" htmlFor="caps">
							Case Sensitive
						</label>
                        <br />

                        {/* Password Length */}
                        <label htmlFor="len" className="form-label">Length of Password</label>
                        
                        <input type="range" className="form-range" min="0" max="14" id="len"/>
                        <input type="text" id="textInput"></input>


					</div>
				</div>
                </form>
			</div>
		);
	}
}

export default PasswordGen;
