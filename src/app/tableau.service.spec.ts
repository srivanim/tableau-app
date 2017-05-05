/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableauService } from './tableau.service';

describe('TableauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableauService]
    });
  });

  it('should ...', inject([TableauService], (service: TableauService) => {
    expect(service).toBeTruthy();
  }));
});
