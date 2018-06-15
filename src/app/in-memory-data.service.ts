import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Watch Highlights' },
      { id: 2, name: 'Get Haircut' },
      { id: 3, name: 'Download Movie' },
      { id: 4, name: 'Redeem Coupon' },
      { id: 5, name: 'Bike Servicing' }
    ];
    return {heroes};
  }
}
