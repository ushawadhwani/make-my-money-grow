import React, { useEffect, useState } from "react";
import {
  ModalFooter,
  Modal,
  ModalBody,
  Form,
  Button,
  Col,
  Row,
  CardHeader,
} from "reactstrap";
import ClientInput from "../Common/ClientInput";

const CoinModal = ({
  collapseOne,
  collapseOneOpen,
  saveDataInList,
}) => {
  const toggle = () => {
    collapseOneOpen(!collapseOne);
  };

  const [error, setError] = useState(false);
  const [coinName, setCoinName] = useState("");
  const [ticker, setTicker] = useState("");
  const [price, setPrice] = useState("");
  const [priceChange, setPriceChange] = useState("");
  const [mentions, setMentions] = useState("");
  const [mentionsChange, setMentionsChange] = useState("");
  const [positiveSentimentPrec, setPositiveSentimentPrec] = useState("");

  const handlePostCall = async () => {
    setError(false);
    var data = {
      Name:coinName,
      Ticker:ticker,
      Price:price,
      PriceChange:priceChange,
      Mentions:mentions,
      MentionsChange:mentionsChange,
      PositiveSentimentPrec:positiveSentimentPrec
    };
    saveDataInList(data);
    toggle();
  };

  const validateInput = () => {
    let isValid = true;
    if (!coinName || !ticker || !price || !priceChange || !mentions ||!mentionsChange || !positiveSentimentPrec) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      handlePostCall();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Modal isOpen={collapseOne} size="lg" scrollable={true}>
        <CardHeader>
          <Row>
            <Col>Save Coin</Col>
            <Col></Col>
          </Row>
        </CardHeader>

        <ModalBody className="bg-light">
          <Form>
            <ClientInput
              id="Name"
              label="Name"
              value={coinName}
              onChange={({ target }) => setCoinName(target.value)}
            />

            <ClientInput
              id="Ticker"
              label="Ticker"
              value={ticker}
              onChange={({ target }) => setTicker(target.value)}
            />
            <ClientInput
              id="Price"
              label="Price"
              value={price}
              onChange={({ target }) => setPrice(target.value)}
            />
            <ClientInput
              id="PriceChange"
              label="PriceChange"
              value={priceChange}
              onChange={({ target }) => setPriceChange(target.value)}
            />
            <ClientInput
              id="Mentions"
              label="Mentions"
              value={mentions}
              onChange={({ target }) => setMentions(target.value)}
            />
            <ClientInput
              id="MentionsChange"
              label="MentionsChange"
              value={mentionsChange}
              onChange={({ target }) => setMentionsChange(target.value)}
            /><ClientInput
            id="PositiveSentimentPrec"
            label="PositiveSentimentPrec"
            value={positiveSentimentPrec}
            onChange={({ target }) => setPositiveSentimentPrec(target.value)}
          />
            
          </Form>
          {error && (
            <div style={{ color: "red" }}>
              Please enter all the values, they are required!
            </div>
          )}
        </ModalBody>
        <ModalFooter className="justify-content-between bg-light">
          <Button
            color="secondary"
            size="sm"
            className="shadow"
            onClick={toggle}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            size="sm"
            className="shadow"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CoinModal;
