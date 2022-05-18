using Bagatka.IPerfect.Core.Features.CentralizedTesting.Models;

namespace Bagatka.IPerfect.Core.Features.CentralizedTesting.Interfaces;

public interface ICentralizedTestingService
{
    IReadOnlyCollection<CentralizedTest> GetAllAsync();
    CentralizedTest GetByIdAsync(Guid id);
}