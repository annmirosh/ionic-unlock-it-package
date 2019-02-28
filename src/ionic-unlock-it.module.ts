import { NgModule, ModuleWithProviders } from '@angular/core';
import { UnlockItComponent } from './components/unlock-it-component';
import { UnlockItProvider } from './providers/unlock-it-provider';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        UnlockItComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        UnlockItComponent
    ]
})
export class IonicUnlockItModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicUnlockItModule,
            providers: [UnlockItProvider]
        };
    }
}