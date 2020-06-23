import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform, AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public corpoPagina: HTMLElement;
public img: HTMLElement;
public scanner : any;
public screenOrientation : ScreenOrientation;


  constructor(private qrScanner: QRScanner, private dialogs: Dialogs, public platform: Platform,
    screenOrientation: ScreenOrientation, public alertController: AlertController) {
    this.platform.backButton.subscribeWithPriority(0, ()=>{

      
      this.corpoPagina.style.opacity = "1";
      this.img.style.opacity = "1";

      this.qrScanner.hide();
      this.scanner.unsubscribe(); //stop scanner

      this.initializeApp();

    });
  }

  /*alert*/
  async presentAlert(text:string){
    const alert = await this.alertController.create({
      header: 'QRScanner',
      subHeader: 'Resultado obtido: ',
      message: `<textarea>${text}</textarea>`,
      buttons: [{
        text: 'OK'
      }]
    })
    
      alert.present();
    }

  public initializeApp(){
    this.platform.ready().then(() => { 
      this.screenOrientation.lock
      (this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    });

  }

  public lerQrCode(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
          this.qrScanner.show();

          this.corpoPagina = document.getElementsByTagName('ion-content')[0] as HTMLElement;
          this.corpoPagina.style.opacity = "0";

          this.img = document.getElementById('logo') as HTMLElement;
          this.img.style.opacity = "0"

       // start scanning
       this.scanner = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.presentAlert(text);

         this.corpoPagina.style.opacity = "1";
         this.img.style.opacity = "1";

         this.qrScanner.hide(); // hide camera preview
         this.scanner.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));

  }
  
}
