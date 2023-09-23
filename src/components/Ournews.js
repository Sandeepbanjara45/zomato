import Card from 'react-bootstrap/Card';

const Ournews= ({imgsrc,title,icon1,icon2,desc,readmore})=> {
  return (
    <div className='col-sm-12 col-md-4 col-lg-4 col-12 mb-5 aligncard'>
    <Card style={{ width: '22rem' }} className='stylecard'>
      <Card.Img variant="top" src={imgsrc} className='imagesize'/>
      <Card.Body className='bodysize'>
        <Card.Title className='mt-3'>{title}</Card.Title>
        <Card.Text>
        <p className='mt-3' >{icon1} admin &nbsp; {icon2} 17 sep 2023</p>
          {desc}
        </Card.Text>
        <h5 className="read mt-4">{readmore } &gt; </h5>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Ournews;