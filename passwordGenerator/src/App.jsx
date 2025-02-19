import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState("8")
  const [numberAllowed, isNumberAllowed] = useState(false)
  const [charAllowed, isCharAllowed] = useState(false)
  const [password, setPassword] = useState("Password")

  // to generate the password with user selected criteria
  const genPassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '~!@@#$%^&*()`|}{[]';
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  
  useEffect(() => {
    genPassword()
  }, [length, numberAllowed, charAllowed, genPassword])

  // to coopy the password to clipboard
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-60 bg-gray-700"
        style={{ backgroundColor: '#3E5879', color: '#EB5A3C' }}>
        <h1 className="text-center text-2xl font-semibold m-4" style={{ color: '#DDA853' }}>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3 "
            style={{ backgroundColor: '#FBF5DD', color: '#213555' }}
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="outline-none  text-blue-950 px-3 py-1  shrink-0"
            style={{ backgroundColor: "#DDA853" }}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
            <label> Length:{length}</label>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                value={numberAllowed}
                onChange={(e) => { isNumberAllowed((prev) => !(prev)) }}
              >
              </input>
              <label>Numbers </label>

            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => isCharAllowed((prev) => !prev)}
              />
              <label>Characters </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
