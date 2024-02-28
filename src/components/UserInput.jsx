export default function UserInput({ onChangeUserInput, userInput }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChangeUserInput('initialInvestment', event.target.value)} />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChangeUserInput('annualInvestment', event.target.value)} />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChangeUserInput('expectedReturn', event.target.value)} />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onChangeUserInput('duration', event.target.value)} />
                </div>
            </div>
        </div>
    );
}