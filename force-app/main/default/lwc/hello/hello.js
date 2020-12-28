import { LightningElement } from 'lwc';
import My_Custom_Label from '@salesforce/label/c.My_Custom_Label';
import Blackburn from '@salesforce/label/c.sb_Blackburn';

export default class Hello extends LightningElement {
    label = {
        My_Custom_Label,
        Blackburn
    };
}