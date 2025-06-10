import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('hello')
  getHello() {
    return {
      title: `Ena & Churchill's wedding - rsvp`,
      siteName: 'Ena & Churchill\'s Wedding',
      weddingDate: 'Saturday, November 22nd, 2025',
      weddingTime: '4:00 PM - 11:00 PM',
      venueName: 'Cove 55',
      venueAddress: '93010 Kuching, Sarawak, Malaysia',
      hotelName: 'Cove 55',
      hotelAddress: 'Cove 55, 93010 Kuching, Sarawak, Malaysia',
      coupleLastName: 'Lee',
      registryStore1: 'Williams Sonoma Registry',
      registryStore2: 'Target Registry',
      contactEmail: 'wedding@feliciousx.dev',
      currentYear: new Date().getFullYear()
    };
  }
}
