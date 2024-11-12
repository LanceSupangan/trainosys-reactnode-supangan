import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import Rating from './components/Rating'

const App = () => {

  return (
    <>
      <div className="container-input">
        <h2>Input Component</h2>
        <Input
          type="text"
          label="First Name"
          placeholder="Enter your first name"
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email address"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your secure password"
        />
      </div>
      
      <div className="container-card">
        <Card
          imageUrl="https://knowledgecottonapparel.com/cdn/shop/products/Regular_fit_Basic_tee-T-shirts-1010113-1300_Black_Jet.jpg?v=1676455882"
          title="Basic Tee"
          price="35"
        />
        <Card
          imageUrl="https://assets.vogue.com/photos/66fafaca1a0da24478e0e97a/3:4/w_748%2Cc_limit/White%2520T-Shirt_Slides_0009_mother%2520lil%2520goodie%2520.jpg"
          title="Basic White Tee"
          price="35"
        />
        <Card
          imageUrl="https://freshcleantees.com/cdn/shop/files/CREWNECKSCharcoal_737x980.jpg?v=1714780164"
          title="Basic Charcoal Tee"
          price="35"
        />
        <Card
          imageUrl="https://ih1.redbubble.net/image.1319393197.3713/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.jpg"
          title="Artwork Dots Tee"
          price="45"
        />
      </div>

      <div className="container-alert">
        <Alert title="Successfully uploaded" type="success" />
        <Alert title="Attention needed" type="warning" message="Lorem ipsum ..." />
      </div>

      <div className="container-star">
        <Rating value={4} />
        <Rating value={4} maximumValue={10} />
      </div>
    </>
  )
}

export default App
