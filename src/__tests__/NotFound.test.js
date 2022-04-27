import React from 'react';
import { screen, render } from '@testing-library/react';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import NotFound from '../pages/NotFound';

describe('Testa página NotFound', () => {
  it('Testa se aparece o texto correto na página', () => {
    // const history = createMemoryHistory();
    // render(
    //   <Router history={ history }>
    //     <NotFound />
    //   </Router>,
    // );
    render(<NotFound />);
    const title = screen.getByRole('heading', { level: 1, name: /not found/i });
    expect(title).toBeInTheDocument();
  });
});
