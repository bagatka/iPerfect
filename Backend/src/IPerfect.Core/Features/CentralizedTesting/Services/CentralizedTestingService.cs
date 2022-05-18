using Bagatka.IPerfect.Core.Features.CentralizedTesting.Interfaces;
using Bagatka.IPerfect.Core.Features.CentralizedTesting.Models;

namespace Bagatka.IPerfect.Core.Features.CentralizedTesting.Services;

internal sealed class CentralizedTestingService : ICentralizedTestingService
{
    public IReadOnlyCollection<CentralizedTest> GetAllAsync() { throw new NotImplementedException(); }

    public CentralizedTest GetByIdAsync(Guid id) { throw new NotImplementedException(); }
}