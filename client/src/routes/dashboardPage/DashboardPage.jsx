import './dashboardPage.css'

const DashboardPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value
    if(!text) return;

    await fetch("http://localhost:3000/api/chats", {
      method: "POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify({text})
    });
  };

  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" />
          <h1>React AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" />
            <span>Help Me with My Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name='text' placeholder='Ask me anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage