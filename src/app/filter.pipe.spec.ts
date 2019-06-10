import { FilterPipe } from './filter.pipe';
import { Country } from './interfaces/country';

describe('FilterPipe', () => {
  const items: Country[] = [
    {
      name: 'South Korea',
      languages: [
        {
          name: 'Korean',
        }
      ],
      regionalBlocs: [
        {
          acronym: 'EAST'
        }
      ]
    },
    {
      name: 'North Korea',
      languages: [
        {
          name: 'Korean',
        }
      ],
      regionalBlocs: [
        {
          acronym: 'ASIA'
        }
      ]
    },
    {
      name: 'Japan',
      languages: [
        {
          name: 'Japanese',
        }
      ],
      regionalBlocs: [
        {
          acronym: 'EAST'
        }
      ]
    },
  ];
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter the countries based on the search text.', () => {
    const searchText = 'Korea';
    const selectedLanguage = undefined;
    const selectedBloc = undefined;

    const filteredItems = [
      {
        name: 'South Korea',
        languages: [
          {
            name: 'Korean',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'EAST'
          }
        ]
      },
      {
        name: 'North Korea',
        languages: [
          {
            name: 'Korean',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'ASIA'
          }
        ]
      },
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(items, searchText, selectedLanguage, selectedBloc)).toEqual(filteredItems);
  });

  it('should filter the countries based on the selected language.', () => {
    const searchText = undefined;
    const selectedLanguage = 'Japanese';
    const selectedBloc = undefined;

    const filteredItems = [
      {
        name: 'Japan',
        languages: [
          {
            name: 'Japanese',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'EAST'
          }
        ]
      },
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(items, searchText, selectedLanguage, selectedBloc)).toEqual(filteredItems);
  });

  it('should filter the countries based on the selected regional bloc.', () => {
    const searchText = undefined;
    const selectedLanguage = undefined;
    const selectedBloc = 'EAST';

    const filteredItems = [
      {
        name: 'South Korea',
        languages: [
          {
            name: 'Korean',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'EAST'
          }
        ]
      },
      {
        name: 'Japan',
        languages: [
          {
            name: 'Japanese',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'EAST'
          }
        ]
      },
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(items, searchText, selectedLanguage, selectedBloc)).toEqual(filteredItems);
  });

  it('should filter the countries based on all three conditions', () => {
    const searchText = 'Korea';
    const selectedLanguage = 'Korean';
    const selectedBloc = 'EAST';

    const filteredItems = [
      {
        name: 'South Korea',
        languages: [
          {
            name: 'Korean',
          }
        ],
        regionalBlocs: [
          {
            acronym: 'EAST'
          }
        ]
      },
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(items, searchText, selectedLanguage, selectedBloc)).toEqual(filteredItems);
  });

});
