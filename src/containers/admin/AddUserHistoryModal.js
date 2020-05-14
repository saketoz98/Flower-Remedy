import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
} from "mdbreact";
import { withRouter } from "react-router-dom";
import { UserHistoryContext } from "../../context/history";
import Button from "../../components/utilities/DashboardButton";

const AddUserHistoryModal = (props) => {
  const { addUserHistory } = useContext(UserHistoryContext);

  const [SelectedMeds, setSelectedMeds] = useState([]);
  const [value, setvalue] = useState("Choose your Medicine");
  const [amount, setamount] = useState(0);

  const handleChange = (event) => {
    // event.persist();
    const med = event.target.value;
    setvalue(med);
    console.log("Value set");
  };

  const handleAmount = (event) => {
    setamount(event.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();
    setSelectedMeds((prevMeds) => [
      ...prevMeds,
      { medicineName: value, amount: amount },
    ]);
    console.log(SelectedMeds);
    setvalue("Choose your Medicine");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addUserHistory(SelectedMeds, props.match.params.uid);
  };
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
          <MDBModalHeader toggle={props.toggle}>
            Add Contents of Bottle
          </MDBModalHeader>
          <MDBModalBody>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <select value={value} onChange={handleChange}>
                    <option disabled value="Choose your Medicine">
                      Choose your Medicine
                    </option>
                    <option value="Aspen">Aspen</option>
                    <option value="Mimulus">Mimulus</option>
                    <option value="CherryPlum">CherryPlum</option>
                    <option value="RedchestNut">RedchestNut</option>
                    <option value="RockRose">RockRose</option>
                    <option value="Cerato">Cerato</option>
                    <option value="Scleranthus">Scleranthus</option>
                    <option value="WildOat">WildOat</option>
                    <option value="Larch">Larch</option>
                    <option value="Hornbeam">Hornbeam</option>
                    <option value="Clemantis">Clemantis</option>
                    <option value="HoneySuckle">HoneySuckle</option>
                    <option value="WildRose">WildRose</option>
                    <option value="WhiteChestnut">WhiteChestnut</option>
                    <option value="ChestNutBud">ChestNutBud</option>
                    <option value="Olive">Olive</option>
                    <option value="WaterViolet">WaterViolet</option>
                    <option value="Impatiens">Impatiens</option>
                    <option value="Heather">Heather</option>
                    <option value="Agrimony">Agrimony</option>
                    <option value="Centaury">Centaury</option>
                    <option value="Walnut">Walnut</option>
                    <option value="Holly">Holly</option>
                    <option value="Pine">Pine</option>
                    <option value="Elm">Elm</option>
                    <option value="StarOfBeth">StarOfBeth</option>
                    <option value="SweetChestNut">SweetChestNut</option>
                    <option value="Gorse">Gorse</option>
                    <option value="Mustard">Mustard</option>
                    <option value="Gentian">Gentian</option>
                    <option value="Oak">Oak</option>
                    <option value="Willow">Willow</option>
                    <option value="CrabApple">CrabApple</option>
                    <option value="Chicory">Chicory</option>
                    <option value="Beech">Beech</option>
                    <option value="Vervain">Vervain</option>
                    <option value="RockWater">RockWater</option>
                    <option value="Vine">Vine</option>
                  </select>
                  <MDBInput
                    label="Amount in ml"
                    type="number"
                    onChange={handleAmount}
                  />
                  <Button color="purple" onClick={addToList}>
                    Add Item
                  </Button>
                  <Button color="purple" className="float-right">
                    Save
                  </Button>
                </div>
              </form>
            </div>
            <div style={{marginTop:"10px"}}>
              <MDBContainer>
                <MDBListGroup style={{ width: "22rem" }}>
                  {SelectedMeds.length > 0
                    ? SelectedMeds.map((med) => (
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                          {med.medicineName}
                          <MDBBadge color="primary" pill className="float-right">
                            {med.amount}
                          </MDBBadge>
                        </MDBListGroupItem>
                      ))
                    : null}
                </MDBListGroup>
              </MDBContainer>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={props.toggle}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </React.Fragment>
  );
};

export default withRouter(AddUserHistoryModal);
